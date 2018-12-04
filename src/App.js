import React, { Component } from 'react';
import Table from 'react-bootstrap/lib/Table';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import tasks from './task1.json';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { currentPool: tasks };
    }

    render() {
        let data = [];

        for (let i = 0; i < this.state.currentPool.length; i++) {
            data.push(
                <ListGroupItem>
                    <Table>
                        <tr>
                            <td class="td-name">Task Name: </td>
                            <td>{this.state.currentPool[i]["task-name"]}</td>
                        </tr>
                        <tr>
                            <td class="td-name">Due: </td>
                            <td>{this.state.currentPool[i]["due"]}</td>
                        </tr>
                        <tr>
                            <td class="td-name">Status: </td>
                            <td>{this.state.currentPool[i]["status"]}</td>
                        </tr>
                    </Table>
                </ListGroupItem>
            );
        }

        return (
            <ListGroup>
                {data}
            </ListGroup>
        );
    }
}

export default App;
