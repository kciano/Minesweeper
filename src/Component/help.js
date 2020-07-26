import React from 'react';
import '../App.css';

const help = () => {
    return (
        <div>
           <h1 className="Rules">The rules of the game</h1><br></br><br></br><br></br>

           <ol>
               <li>You are presented with a board of squares. Some squares contain mines (bombs), others don't. If you click on a square containing a bomb, you lose. If you manage to click all the squares (without clicking on any bombs) you win.</li><br></br>
               <li>Clicking a square which doesn't have a bomb reveals the number of neighbouring squares containing bombs. Use this information plus some guess work to avoid the bombs.</li><br></br>
               <li>To open a square, point at the square and click on it. To mark a square you think is a bomb, point and right-click (or hover with the mouse and press Space).</li><br></br>
               <li>A squares "neighbours" are the squares adjacent above, below, left, right, and all 4 diagonals. Squares on the sides of the board or in a corner have fewer neighbors. The board does not wrap around the edges.</li><br></br>
               <li>If you open a square with 0 neighboring bombs, all its neighbors will automatically open. This can cause a large area to automatically open.</li><br></br>
               <li>To remove a bomb marker from a square, point at it and right-click again.</li><br></br>
               <li>You don't have to mark all the bombs to win; you just need to open all non-bomb squares.</li><br></br>
               <li>Click the reset button to start a new game.</li>

            </ol> 
        </div>
    );
};

export default help;