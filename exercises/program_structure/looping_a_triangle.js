/* 
- Write a loop that makes seven calls to console.log
to output the following triangle:

#
##
###
####
#####
######
#######
*/

function loopingTriangle(triangleSize) {
  for (let line = '#'; line.length <= triangleSize; line += '#') {
    console.log(line);
  }
}

loopingTriangle(7);