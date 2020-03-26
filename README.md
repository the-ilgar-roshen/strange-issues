# strange-issues
Dealing with issues

-- Procedure:
set var to hold a link to an object
pass the object into a [callback] function
save [by pushing the link of] the callback function in a list


-- Cause & Effect + Expectation:
cause  1: do the Procedure 2 times with    for-loop [ execute the function twice ]
effect 1: output is     the same                  at each executed time

cause  2: do the Procedure 2 times without for-loop [ execute the function twice ]
effect 2: output is not the same, it is different at each executed time

expectation: the 'effect 2' is the desirable and expected one


-- Issue:
the link behaves differently inside a scope of a callback function
when the object passed by argument [or comes via parameter] into the callback function
and when it passed from outer/parent/caller function into the inner/calee callback one


-- Question:
why the same object sticks on one #address
and causes the object to be changed at the next iteration even
when the variable holding that link (#address) re-declares itself via 'var' at each iteration 
