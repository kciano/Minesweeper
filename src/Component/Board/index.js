import React, { Component } from 'react';
import Row from "../Row";

class Board extends Component {

    constructor(props){
        super(props);
        this.state = {
            rows: this.createBoard(props)
            
        }

    }
    componentWillReceiveProps(nextProps){
        if (this.props.openCells > nextProps.openCells) {
            this.setState({
                rows: this.createBoard(nextProps)
            })   
        }

    }
    createBoard = props => {
        let board = [];

        for (let i = 0; i < props.rows; i++) {
            board.push([]);

            for (let j = 0; j < props.columns; j++){
                board[i].push({
                    x: j, 
                    y: i,
                    count: 0,
                    isOpen: false,
                    hasMine: false,
                    hasFlag: false
                })
            }


        }
         // After creating the board, we add our mines
         for (let i = 0; i < props.mines; i++) {
            let randomRow = Math.floor(Math.random() * props.rows)
            let randomCol = Math.floor(Math.random() * props.columns);
            let cell = board[randomRow][randomCol];

            if (cell.hasMine) {
                i--;
            } else {
                cell.hasMine = true;
            }
            
        }
        return board;
    };
    open = cell => {
        if(this.props.status === "ended") {
            return;
        }
        let asyncCountMines = new Promise(resolve => {
            let mines = this.findMines(cell);
            resolve(mines);
        });

        asyncCountMines.then(numberOfMines => {
            
            let rows = this.state.rows;
            let current = rows[cell.y][cell.x];
    
    
    
            if (current.hasMine && this.props.openCells === 0) {
                
                let newRows = this.createBoard(this.props);
                this.setState({
                    rows: newRows
                }, () => {
                    this.open(cell);
                })
            } else {
                if (!cell.hasFlag && !current.isOpen) {
                    this.props.openCellClick();
                    current.isOpen = true;
                    current.count = numberOfMines;
                    this.setState({rows});
                    if (!current.hasMine && numberOfMines === 0) {
                        this.findAroundCell(cell);
                    }
                    if (current.hasMine && this.props.openCells !== 0) {
                        alert("Sorry you lost, click the reset button to try again");
                        
                        this.props.endGame();

                    }
                }
            }
        });
       

    };
    flag = cell => {
        if(this.props.status === "ended") {
            return;
        }
        let rows = this.state.rows;
        cell.hasFlag = !cell.hasFlag;
        this.setState({rows});
        this.props.changFlagAmount(cell.hasFlag ? -1 : 1);
    }
    findMines = cell => {
        let minesInProximity = 0;
        for(let row = -1; row <= 1; row++) {
            for(let col = -1; col <= 1; col++) {
                if (cell.y + row >= 0 && cell.x + col >= 0) {
                    if (
                        cell.y + row < this.state.rows.length &&
                        cell.x + col < this.state.rows[0].length
                    ) {
                        if (
                            this.state.rows[cell.y + row][cell.x + col].hasMine && !(row === 0 && col === 0)
                            ) {
                                minesInProximity++;
                            }
                    }
                        
                }
            }
        }
        return minesInProximity;
    };

    findAroundCell = cell => {
        let rows = this.state.rows;

        //Open each cell one at a time, until we find mine

        for (let row = -1; row <= 1; row++){
            for (let col = -1; col <= 1; col++){
                if (cell.y + row >= 0 && cell.x + col >= 0) {
                    if (
                        cell.y + row < rows.length &&
                        cell.x + col < rows[0].length
                    ) {
                        if (!rows[cell.y + row][cell.x + col].hasMine && !rows[cell.y + row][cell.x + col].isOpen
                            ){
                                this.open(rows[cell.y + row][cell.x + col]);
                            }
                        
                    }
                }
            }
        }   
    };
    
    render() {
        let rows = this.state.rows.map((row, index) => {
            return (
                <Row 
                    cells={row}
                    key={index}
                    open={this.open}
                    flag={this.flag}
                />
            )
        })
        return <div className="board">{rows}</div>
    }
}




export default Board;