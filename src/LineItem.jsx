import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const LineItem = ({ item, handleCheck, handleDelete }) => {
    return (
        <li className="item" key={item.id}>
            <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
            />
            <label
                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
            <DeleteIcon
                role="button"
                onClick={() => handleDelete(item.id)}
                tabIndex="0"
                aria-label={`Delete ${item.item}`}
            />
        </li>
    )
}

export default LineItem