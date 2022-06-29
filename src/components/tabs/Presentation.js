import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PersonalDetails from '../personalDetails/Presentation'
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined';
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined';
import Filter3OutlinedIcon from '@mui/icons-material/Filter3Outlined';
import MalingandWorking from '../mailingAndWorkingDetails/Presentation';
import Credentials from '../credentials/Presentation'
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                    indicatorColor="none" textColor="inherit" variant="fullWidth" style={{ height: '60px' }} >
                    <Tab icon={<LooksOneOutlinedIcon />} iconPosition="start" label="Personal Details" {...a11yProps(0)} style={{ fontSize: "9px" }} />
                    <Tab icon={<LooksTwoOutlinedIcon />} iconPosition="start" label="Mailing & work Details" {...a11yProps(1)} style={{ fontSize: "9px" }} />
                    <Tab icon={<Filter3OutlinedIcon />} iconPosition="start" label="Credentials" {...a11yProps(2)} style={{ fontSize: "9px" }} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <PersonalDetails />

            </TabPanel>
            <TabPanel value={value} index={1}>
                <MalingandWorking />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Credentials />
            </TabPanel>
        </Box>
    );
}
