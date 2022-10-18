import React, { useRef, useState } from "react";
import "./drag-input.css";
import { ImgConfig } from "../../config/imgConfig";
import uploadImg from "../../assets/upload.png";

const DragInput = ({ onFileChange }) => {
  const [fileList, setFileList] = useState([]);
  const wrapperRef = useRef(null);

  //The useRef hook was used here because we want to imperatively access a DOM element and alter its state.
  const onDragEnter = () => wrapperRef.current.classList.add("dragover");
  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      onFileChange(updatedList);
    }
  };

  const onFileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1)
    setFileList(updatedList);
    onFileChange(updatedList);
  };

  return (
    <>
      <div
        ref={wrapperRef}
        className="drag-input"
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="drag-input__label">
          <img src={uploadImg} alt="" />
          <p>Drag & Drop your files here</p>
        </div>
        <input type="file" value="" onChange={onFileDrop} />
      </div>
      {fileList.length > 0 ? (
        <div className="drag-preview">
          <p className="drag-preview__title">File Uploads</p>
          {fileList.map((item, index) => (
            <div key={index} className="drag-preview__item">
              <img
                src={ImgConfig[item.type.split("/")[1]] || ImgConfig["default"]}
                alt=""
              />
              <div className="drag-preview__item__info">
                <p>{item.name}</p>
                <p>{item.size}</p>
              </div>
              <span
                className="drag-preview__item__del"
                onClick={() => onFileRemove(item)}
              >
                X
              </span>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default DragInput;
