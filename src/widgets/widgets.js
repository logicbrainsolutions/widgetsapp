import React from 'react';
import './widgets.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Component } from 'react';
import { LOADDATA } from '../constants/actionTypes';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ ...state.item });


const mapDispatchToProps = dispatch => ({

    onLoad: (data) => {
        dispatch({ type: LOADDATA, payload: data })
    }


});

class Widgets extends Component {
    constructor() {
        super();
    }
    
    loadData = async (e) => {
        const data = JSON.parse(localStorage.getItem("widgets")|| "[]");
        
        this.props.onLoad(data);
       

    }
    viewDetails = (id) => {
        console.log(id);
    }

    componentDidMount() {
        this.loadData()
    }

    deleteWidgetHandler = (name) => {
        confirmAlert({
          title: 'Confirm to delete',
          message: 'Are you sure you want to delete this widget?',
          buttons: [
            {
              label: 'Yes',
              onClick: () => this.deleteWidget(name)
            },
            {
              label: 'No',
              onClick: () => console.log('Deletion Canceled')
            }
          ]
        });
      };

    deleteWidget = (name) => {
        let data = JSON.parse(localStorage.getItem("widgets")|| "[]");
        data = data.filter( item => item.name !== name );
        localStorage.setItem('widgets', JSON.stringify(data))
        const response = localStorage.getItem("widgets") || "[]";
        this.props.onLoad(JSON.parse(response));
      }









    renderData = () => {
        console.log(this.props)
        return this.props.items.map((item) => {
            const { name, language } = item //destructuring
            return (
                <tr key={name}>
                    <td>{name}</td>
                    <td>{language}</td>
                    <td><button onClick={() => this.deleteWidgetHandler(name)}>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="Ads">
                <table id="customers">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Language</th>
                            <th>Action</th>
                            {/* <th>Description</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderData()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Widgets);