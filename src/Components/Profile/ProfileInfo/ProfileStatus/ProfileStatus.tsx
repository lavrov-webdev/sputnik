import React, { ChangeEvent, useState } from "react";
import { useEffect } from "react";

type PropsType = {
  statusText: string,
  isOwner: boolean,
  updateStatus: (newStatusText: string) => void
}

const ProfileStatus: React.FC<PropsType> = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [statusText, setStatusText] = useState(props.statusText);

  useEffect(() => {
    setStatusText(props.statusText);
  }, [props.statusText]);

  const activateEditMode = () => {
    if (props.isOwner) setEditMode(true);
  };

  const submitChangeStatus = () => {
    setEditMode(false);
    props.updateStatus(statusText);
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatusText(e.currentTarget.value);
  };

  return (
    <>
      {editMode ? (
        <div className="mb-4">
          <form onSubmit={(e) => {e.preventDefault(); submitChangeStatus()}}>
            <input
              autoFocus
              onBlur={submitChangeStatus}
              onChange={(e) => onStatusChange(e)}
              value={statusText}
            />
          </form>
        </div>
      ) : (
        <div onDoubleClick={activateEditMode} className="fw-light mb-4">
          {statusText || "No status"}
        </div>
      )}
    </>
  );
};

export default ProfileStatus;
