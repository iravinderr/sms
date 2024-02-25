import React, { useState } from 'react';

const StudentTable = ({ students }) => {
  const [editableStudents, setEditableStudents] = useState(students);
  const [sortDirection, setSortDirection] = useState(null);
  const [sortColumn, setSortColumn] = useState(null);

  const handleInputChange = (event, index, field) => {
    const updatedStudents = [...editableStudents];
    updatedStudents[index][field] = event.target.value;
    setEditableStudents(updatedStudents);
  };

  const sortByColumn = (column) => {
    let sortedStudents = [...editableStudents];
    if (sortColumn === column) {
      sortedStudents.reverse();
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      sortedStudents.sort((a, b) => {
        if (a[column] < b[column]) return sortDirection === 'asc' ? -1 : 1;
        if (a[column] > b[column]) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
      setSortColumn(column);
      setSortDirection('asc');
    }
    setEditableStudents(sortedStudents);
  };

  return (
    <div>
      <h2>Student Data</h2>
      <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }} onClick={() => sortByColumn('name')}>
              Name {sortColumn === 'name' && sortDirection === 'asc' && '↑'}
              {sortColumn === 'name' && sortDirection === 'desc' && '↓'}
            </th>
            <th style={{ border: '1px solid black', padding: '8px' }} onClick={() => sortByColumn('rollNo')}>
              Roll No {sortColumn === 'rollNo' && sortDirection === 'asc' && '↑'}
              {sortColumn === 'rollNo' && sortDirection === 'desc' && '↓'}
            </th>
            <th style={{ border: '1px solid black', padding: '8px' }} onClick={() => sortByColumn('midSemMarks')}>
              Mid Sem Marks {sortColumn === 'midSemMarks' && sortDirection === 'asc' && '↑'}
              {sortColumn === 'midSemMarks' && sortDirection === 'desc' && '↓'}
            </th>
            <th style={{ border: '1px solid black', padding: '8px' }} onClick={() => sortByColumn('endSemMarks')}>
              End Sem Marks {sortColumn === 'endSemMarks' && sortDirection === 'asc' && '↑'}
              {sortColumn === 'endSemMarks' && sortDirection === 'desc' && '↓'}
            </th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Total</th>
            <th style={{ border: '1px solid black', padding: '8px' }} onClick={() => sortByColumn('internals')}>
              Internals {sortColumn === 'internals' && sortDirection === 'asc' && '↑'}
              {sortColumn === 'internals' && sortDirection === 'desc' && '↓'}
            </th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {editableStudents.map((student, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <input
                  type="text"
                  value={student.name}
                  onChange={(event) => handleInputChange(event, index, 'name')}
                />
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <input
                  type="text"
                  value={student.rollNo}
                  onChange={(event) => handleInputChange(event, index, 'rollNo')}
                />
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <input
                  type="text"
                  value={student.midSemMarks}
                  onChange={(event) => handleInputChange(event, index, 'midSemMarks')}
                />
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <input
                  type="text"
                  value={student.endSemMarks}
                  onChange={(event) => handleInputChange(event, index, 'endSemMarks')}
                />
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                {parseInt(student.midSemMarks) + parseInt(student.endSemMarks) + parseInt(student.internals)}
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <input
                  type="text"
                  value={student.internals}
                  onChange={(event) => handleInputChange(event, index, 'internals')}
                />
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <input
                  type="text"
                  value={student.attendance}
                  onChange={(event) => handleInputChange(event, index, 'attendance')}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
