// #SKETCHNAME Find Max
var ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];

var m1 = findMax1(ar);
println("Max 1 = ", m1);

// Use recursion to find the maximum numeric value in an array of arrays
function findMax1(ar)
{
    var max = -Infinity;

    // Cycle through all the elements of the array
    for(var i = 0; i < ar.length; i++)
    {
        var el = ar[i];

        // If an element is of type array then invoke the same function
        // to find out the maximum element of that subarray
        if ( Array.isArray(el) )
        {
            el = findMax1( el );
        }

        if ( el > max )
        {
            max = el;
        }
    }

    return max;
}
