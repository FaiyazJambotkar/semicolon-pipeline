# resource "tls_private_key" "pem-key" {
#     algorithm = var.tls_algorithm
#     rsa_bits = var.tls_rsa_bits
# }

# resource "aws_key_pair" "terra-keypair" {
#   key_name   = var.kp_keyname
#   public_key = file(var.kp_pubkey_path)

#   provisioner "local-exec" { 
#     command = "echo '${tls_private_key.pem-key.private_key_pem}' > ../../f-terra-kp.pem && chmod 400 ../../f-terra-kp.pem"
#   }
# }
