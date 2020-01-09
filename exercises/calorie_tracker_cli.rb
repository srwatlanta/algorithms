require "faraday"
require "json"
# HELPER
def calories(input)
  search = Faraday.post("https://trackapi.nutritionix.com/v2/natural/nutrients") do |req|
    req.headers = { "x-app-id" => "6a98d04c", "x-app-key" => "a534efba3430271cf3f04f4f5894ad77" }
    req.body = { "query" => input }
  end
  search_result = JSON.parse(search.body)
  if search_result["foods"]
    return search_result["foods"][0]["nf_calories"]
  else
    return false
  end
end

# RUN
def run
  puts "Please input what you ate!"
  text = gets.chomp
  response = calories(text)
  if !!response
    puts "How many servings did you have?"
    servings = gets.chomp.to_i
    total = (response * servings).to_i
    percent = total / 20.0
    puts "Your #{text} contained #{total} calories."
    puts "This is #{percent.round(2)}% of your daily suggested calories"
  else
    puts "Food not found."
  end
end

run()
