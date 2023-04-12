resource "aws_instance" "terra-ec2" {
  ami                         = var.ec2_ami
  instance_type               = var.ec2_instance_type
  associate_public_ip_address = var.ec2_auto_assign_pub_ip
  key_name                    = var.key_name

  tags = {
    "Name" = var.ec2_tag_name
  }

  subnet_id = var.subnet_id

  vpc_security_group_ids = [var.sg_id]

  connection {
    type        = var.connection_type
    user        = var.connection_username
    private_key = file(var.private_key_path)
    host        = self.public_ip
  }

  provisioner "remote-exec" {
    inline = [
      "sudo apt-get update -y",
      "sudo apt-get install -y ca-certificates curl gnupg",
      "sudo mkdir -m 0755 -p /etc/apt/keyrings",
      "curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg",
      "echo \"deb [arch=\"$(dpkg --print-architecture)\" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \"$(. /etc/os-release && echo \"$VERSION_CODENAME\")\" stable\" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null",
      "sudo apt-get update -y",
      "sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin",
      "sudo docker pull faiyazjambotkar/blogapp:0.1",
      "sudo docker run -d -p 3000:3000 --name semicolon-app faiyazjambotkar/blogapp:0.1"
    ]
  }
}