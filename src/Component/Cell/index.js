import React from "react";
import { BsFlagFill } from "react-icons/bs";
import { FaBomb } from "react-icons/fa";

const Cell = props => {
  let cell = () => {
    if (props.data.isOpen) {
      if (props.data.hasMine) {
        return (
          <div
            className="cell open"
            onContextMenu={e => {
              e.preventDefault();
            }}
            onClick={() => props.open(props.data)}
          >
            <FaBomb />
          </div>
        );
      } else if (props.data.count === 0) {
        return (
          <div
            className="cell open"
            onContextMenu={e => {
              e.preventDefault();
              props.flag(props.data);
            }}
            onClick={() => props.open(props.data)}
          />
        );
      } else {
        return (
          <div
            className="cell open"
            onContextMenu={e => {
              // don't load that nasty context menu, flag it up instead :^)
              e.preventDefault();
            }}
            onClick={() => props.open(props.data)}
          >
            {props.data.count}
          </div>
        );
      }
    } else if (props.data.hasFlag) {
      return (
        <div
          className="cell open"
          onContextMenu={e => {
            // don't load that nasty context menu, flag it up instead :^)
            e.preventDefault();
            props.flag(props.data);
          }}
          onClick={() => props.open(props.data)}
        >
          <BsFlagFill />
        </div>
      );
    } else {
      return (
        <div
          className="cell"
          onContextMenu={e => {
            // don't load that nasty context menu, flag it up instead :^)
            e.preventDefault();
            props.flag(props.data);
          }}
          onClick={() => props.open(props.data)}
        />
      );
    }
  };
  return cell();
};

export default Cell;
