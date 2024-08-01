import React from 'react'
import ItemsList from './ItemsList'

const Content = ({ items, handleCheck, handleDelete }) => {

    return (
        <main>
            {(items.length) ? (
                <ItemsList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p>To Get Started, Add a list.</p>
            )
            }
        </main>
    )

}
export default Content
