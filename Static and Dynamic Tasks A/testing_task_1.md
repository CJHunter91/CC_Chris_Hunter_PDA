### Testing task 1 code:

  Carry out static testing on the code below.  
  Read through the code.  Comment any errors you can see without correcting them.

 
def func1 val 
  if val = 1
  return true
  else
  return false
  end
end
<!-- func1 is missing brackets around the val parameter and indentation of both return statements are incorrect -->
  
dif max a b
  if a > b
      return a 
  else
  b
  end 
end 
end 
<!-- max has the def misspelled, no brackets around parameters, missing comma between parameters, doesn't return b on line 20 and it's not indented correctly, has repeated end at the end of the function -->
  
def looper 
  for i in 1..10
  puts i
  end
end
<!-- looper puts statement needs indented on line 28, i needs to be returned after the for loop  -->
 
failures = 0 
 
if looper == 10 
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
 <!-- looper if statement missing end -->
  
if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end 
 
  
if max(100,1) == 100 
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  failrues = failures + 1
end
<!-- spelling mistake of failures -->

  
if failures 
  puts "Test Failed"
else
  puts "Test Passed"
end
<!-- failures if statement needs to have a conditional 'stating failures > 0' -->

