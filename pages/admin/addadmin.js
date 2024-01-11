import {
    Paper,
    Grid,
    Stack,
    TextField,
    Checkbox,
    FormGroup,
    FormControlLabel,
    RadioGroup,
    Radio,
    FormLabel,
    FormControl,
    Button,
    InputLabel,
    Input,
    FormHelperText,
    Select,
    MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { createTheme, Container, styled, Box, ThemeProvider } from "@mui/material/styles";
import BaseCard from "./compo/layoutt/shared/BaseCard";
import Sidebar from "./compo/layoutt/sidebar/Sidebar";
import { MdOutlineCloudUpload } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: "60px",
}));

const MainWrapper = styled("div")(() => ({
    display: "flex",
    minHeight: "100vh",
    width: "100%",
}));

const PageWrapper = styled("div")(() => ({
    display: "flex",
    flexGrow: 1,
    paddingBottom: "60px",
    flexDirection: "column",
    zIndex: 1,
    backgroundColor: "transparent",
}));

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

const AddAdmin = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("Role");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [gender, setGender] = useState("");

    //Set Form data
    const [FormData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
        password: "",
        cpassword: "",
        gender: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (FormData.password === FormData.cpassword && FormData.name !== "" && FormData.email !== "" && FormData.password !== ""
            && FormData.role !== "" && FormData.gender !== "") {

            let data = FormData;
            let endPoint = `${process.env.NEXT_PUBLIC_HOST}/api/adduser`;
            console.log("Im hit", data, endPoint)

            try {
                let res = await fetch(endPoint, {
                    method: "POST",
                    headers: {
                        'Content-type': "application/json",
                    },
                    body: JSON.stringify(data),
                });

                let result = await res.json();
                console.log(result)

                if (result.success === true) {
                    console.log({ message: "User Succcessfully registered!" });
                    localStorage.setItem('token', result.token);
                    toast.success("User has been created!", {
                        position: "top-left",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });

                    setFormData({ name: "", email: "", password: "", cpassword: "", gender: "" });

                } else {
                    toast.error(`Sorry, ${result.message}`, {
                        position: "bottom-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }

            } catch (error) {
                console.log({ error: "Registration Failed!" })
            }


        }
        else {
            console.log({ error: "Passwords must be same" });
            toast.error('Sorry, Please Enter Same Passwords', {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };



    return (
        <MainWrapper className="mainwrapper">

            <style jsx global>{`
        .navbar {
          display: none;
        }
        footer {
          display: none;
        }
      `}</style>

            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            {/* ------------------------------------------- */}
            {/* Sidebar */}
            {/* ------------------------------------------- */}
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                isMobileSidebarOpen={isMobileSidebarOpen}
                onSidebarClose={() => setMobileSidebarOpen(false)}
            />
            {/* ------------------------------------------- */}
            {/* Main Wrapper */}
            {/* ------------------------------------------- */}
            <PageWrapper className="page-wrapper">
                {/* ------------------------------------------- */}
                {/* Header */}
                {/* ------------------------------------------- */}
                {/* <Header toggleMobileSidebar={() => setMobileSidebarOpen(true)} /> */}
                {/* ------------------------------------------- */}
                {/* PageContent */}
                {/* ------------------------------------------- */}

                <Grid container spacing={3} padding={4}>
                    <Grid item xs={12} lg={12}>
                        <BaseCard title="Add Admin">
                            <>
                                <Stack spacing={3}>
                                    <TextField
                                        id="name"
                                        name="name"
                                        label="Name"
                                        variant="outlined"
                                        onChange={handleChange}
                                        value={FormData.name}

                                    />
                                    <TextField
                                        id="email"
                                        name="email"
                                        label="Email"
                                        variant="outlined"
                                        onChange={handleChange}
                                        value={FormData.email}

                                    />
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            name="role"
                                            value={FormData.role}
                                            label={FormData.role}
                                            onChange={handleChange}

                                        >
                                            <MenuItem value={"Teacher"}>Teacher</MenuItem>
                                            <MenuItem value={"Principal"}>Principal</MenuItem>
                                            <MenuItem value={"Admin"}>Admin</MenuItem>
                                        </Select>
                                    </FormControl>

                                    <form className="flex flex-row space-x-10">
                                        <TextField
                                            id="password"
                                            name="password"
                                            label="Password"
                                            type="password"
                                            variant="outlined"
                                            onChange={handleChange}
                                            value={FormData.password}
                                            autoComplete="p"

                                        />
                                        <TextField
                                            id="cpassword"
                                            name="cpassword"
                                            label="Confirm Password"
                                            type="password"
                                            variant="outlined"
                                            onChange={handleChange}
                                            value={FormData.cpassword}
                                            autoComplete="c"

                                        />
                                    </form>

                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label">
                                            Gender
                                        </FormLabel>

                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            name="gender"
                                            value={FormData.gender}
                                            onChange={handleChange}
                                            className="flex flex-row"

                                        >
                                            <FormControlLabel
                                                value="female"
                                                control={<Radio />}
                                                label="Female"
                                            />
                                            <FormControlLabel
                                                value="male"
                                                control={<Radio />}
                                                label="Male"
                                            />
                                            <FormControlLabel
                                                value="other"
                                                control={<Radio />}
                                                label="Other"
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                </Stack>
                                <br />
                                
                                <Button variant="outlined" onClick={handleSubmit} className="bg-blue-600 text-white hover:text-blue-700">
                                    Submit
                                </Button>
                            </>
                        </BaseCard>
                    </Grid>
                </Grid>
            </PageWrapper>

        </MainWrapper >
    );
};

export default AddAdmin;
