##PDA Software Development
####Implementation and Testing Level 8

#####Testing tasks


###Section A: Static and Dynamic Testing


 |This activity relates to the following Outcome and Knowledge/Skill: 
 |------------------------------------------------------------------
 |Outcome 4: Test programs using a range of approaches:
 | Carry out static testing (verification)
 |Carry out Dynamic testing (validation)
 
 
####Task 1: Static Testing

	Carry out static testing on the attached printout of code.  

	Read through the code.  Highlight and correct any errors you can see.



####Task 2: Dynamic Testing

	You will be given the USB Stick with the code you have looked over in task 1.  

	Open up the file and correct the errors you spotted in task 1.  

	Carry out dynamic testing on the code.  Correct any errors you find.
	
	

Save the corrected code to your USB drive, you may leave comments on your finds or changes.




###Testing task 1 code:

	Carry out static testing on the code below.  
	Read through the code.  Highlight and correct any errors you can see.

 
```
def func1(val)
  if val = 1
	  return true
  else
	  return false
  end
end
--added parentheses and indented code above
  
def max(a, b)
	if a > b
  	return a 
	else
 	  return b
	end 
end 
--corrected spelling, added parentheses and comma
--indented code correctly
--added return for consistency in code
--removed extra end
  
def looper 
  for i in 1..10
	  puts i
  end
end
--indented code above
 
failures = 0 
 
if looper == 10 
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
end
--added end above
--strange if loop since looper will never == 10. all it does is puts numbers. looper itself never actually has a value of 10, given the def of looper above.
  
if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end 
 
  
if max(100,1) == 100 
  puts "max(100,1) passed"
else
  puts "max(100,1) failed"
  failures = failures + 1
end
--typo fixed above
--corrected func1(3) to max(100,1) in else statement

  
if failures 
  puts "Test Failed"
else
  puts "Test Passed"
end

```

