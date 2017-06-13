@months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"]

  def month_to_string(number)
    puts @months[number - 1]
  end

  puts "Enter a number between 1 and 12:"
  number = gets.chomp.to_i
  puts month_to_string(number)