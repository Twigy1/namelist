import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import * as actions from "../actions/employees";

const Employees = (props) => {
    
    useEffect(()=> {
        
        props.fetchAllEmployees()
    
    }, [])
    return ( 
        <Grid container>
            <Grid item xs={7}>
                <div>list of post</div>
            <Grid>
        </Grid> );
        );
}


const mapStateToProps = state => ({
    employeeList : state.Employees.list


const mapActionToProps = {
    fetchAllEmployees : actions.fetchAll
}
            
export default connect(mapStateToProps, mapActionToProps)(Employees);