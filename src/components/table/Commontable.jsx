import React from "react"
import "./Commontable.css"

const Commontable = ({ columns = [], data= [], actions }) => {

    return (
        <div className="containertable">
            <table id="customers">
                <thead>
                    <tr>
                        {columns.map(column => <th key={column.key}>{column.name}</th>)}
                        {actions && <th>Hành động</th>}
                    </tr>
                </thead>
                <tbody>
                    {data.map(item =>
                        <tr key={item.id}>
                            {columns.map(column => <td key={column.key + item.id}>{item[column.key]}</td>)}
                            {actions && (
                                <td className="actis">
                                    {actions.map((action, index) => {
                                        if (typeof action === 'function') {
                                            const node = action(item);
                                            return <span key={index} className="acti">{node}</span>;
                                        }
                                        return <span key={index} className="acti">{action}</span>;
                                      })}
                                </td>
                            )}

                        </tr>
                    )}
                </tbody>

            </table>
        </div>
    );
}
export { Commontable }