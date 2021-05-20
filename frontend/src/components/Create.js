import React, { useState } from 'react'
import { NavLink, useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { TextField } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from "axios"



function Create() {
    const history = useHistory()

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
            button: {
                margin: theme.spacing(1),
            },
        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
        },
    }));

    const classes = useStyles();

    const [input, setInput] = useState({
        name: "",
        date: "",
        tag: "",
        color: "",
        url: "",
        text: ""

    })

    function handleChange(e) {

        const { name, value } = e.target;
        setInput(prevInput => {
            return {
                ...prevInput, [name]: value
            }
        })
    }

    function handleClick(event) {
        history.push("/")

        event.preventDefault();
        const newData = {
            name: input.name,
            date: input.date,
            tag: input.tag,
            color: input.color,
            url: input.url,
            text: input.text
        }

        axios.post("http://localhost:3001/create", newData)

    }

    const [age, setAge] = React.useState('');

    const handleChangeAge = (event) => {
        setAge(event.target.value);


    };
    input.tag = age;

    if (age === "React") {
        input.color = "#61DAFB"
    } else if (age === "JavaScript") {
        input.color = "#EDD718"
    } else {
        input.color = "#015ADF"
    }



    return (
        <div>
            <div >
                <div className="add-data">
                    <NavLink to="/">Home</NavLink>
                </div>

                <div className="formContainer">
                    <form className={useStyles.root} noValidate autoComplete="off">
                        <div>
                            <TextField onChange={handleChange} type="text" value={input.name} name="name" id="standard-basic" label=" Name" />
                        </div>
                        <div>
                            <form className={classes.container} noValidate>
                                <TextField onChange={handleChange} type="date" value={input.date} name="date"
                                    id="date"
                                    label="Date"
                                    defaultValue="2017-05-24"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </form>
                        </div>
                        <div className="tagContainer">
                            <FormControl style={{ width: "150px" }} className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">Select Tag</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    onChange={handleChangeAge}
                                >
                                    <MenuItem value={"React"}>React</MenuItem>
                                    <MenuItem value={"JavaScript"}>JavaScript</MenuItem>
                                    <MenuItem value={"CSS"}>CSS</MenuItem>
                                </Select>
                            </FormControl>

                            <TextField style={{ display: "none" }} onChange={handleChange} type="lable" value={input.tag} name="tag" id="standard-basic" label=" Tag" />

                            <TextField style={{ display: "none" }} onChange={handleChange} type="text" value={input.color} name="color" id="standard-basic" label=" Colour" />
                        </div>
                        <div>
                            <TextField onChange={handleChange} type="text" value={input.url} name="url" id="standard-basic" label="Url" />

                            <TextField onChange={handleChange} type="text" value={input.text} name="text" id="standard-basic" label="Text" />
                        </div>


                        <Button onClick={handleClick}
                            variant="contained"
                            color="default"
                            className={classes.button}
                            startIcon={<CloudUploadIcon />}> Upload
                         </Button>

                    </form>
                </div>
            </div>
        </div>
    )
}
export default Create;