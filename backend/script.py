import replicate

pre_prompt = """This is a Career counsellor, guiding users , giving them options, making them feel safe, make them understand properly"""

def get_user_input():
  """Prompts the user for input and returns it"""
  prompt = input("What would you like to talk about?(I can offer career advice, help with decision making, or just listen) or continue with the conversation: ")
  return prompt

while True:

  user_prompt = get_user_input()
  
  full_prompt = f"{pre_prompt}\nI need help regarding {user_prompt}."

  output = replicate.run(
      "meta/llama-2-70b-chat:02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3",
      input={
          "prompt": full_prompt
      }
  )

  for item in output:
    print(item, end="")

  user_choice = input("\nWould you like to continue talking? (yes/no): ")
  if user_choice.lower() != "yes":
    break 

print("Thank you for using Lica, your AI companion. Until next time!")


