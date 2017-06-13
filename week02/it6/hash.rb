@crypto = {
  bitcoin: "https://bitcoin.org",
  monero: "https://getmonero.org",
  ethereum: "https://www.ethereum.org"
}

def crypto_link(choice)
  return @crypto[choice.to_sym]
end

puts "Which crypto would you like to know more about?"
puts "Enter bitcoin, monero or ethereum:"
input = gets.chomp
puts "Info can be found here: " + crypto_link(input)