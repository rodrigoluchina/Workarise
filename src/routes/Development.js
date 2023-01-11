import React,{useState} from "react";

function Development() {
  const [deadline,setDeadline] = useState('');
  const [time,setTime] = useState('');
  const [team,setTeam] = useState('');

  return (
    <div className="card">
      <input
      type="text"
      placeholder="Enter Deadline"
      value={deadline}
      onChange={(e) =>  setDeadline(e.target.value)
      }
      />
      <input
        type="text"
        placeholder="Enter Time"
        value={time}
        onChange={(e) =>  setTime(e.target.value)
        }
        />
      <input
        type="text"
        placeholder="Enter Team"
        value={team}
        onChange={(e) =>  setTeam(e.target.value)
        }
        />

      
    </div>
  );
}

export default Development;
