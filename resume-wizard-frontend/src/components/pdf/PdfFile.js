import React from "react";
import { Page, Text, View, Document, Image, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
        fontSize: '12px',
        padding: 15,
    },
    header: {
        flexDirection: "column",
        textAlign: "center",
        marginBottom: 5
    },
    name: {
        fontSize: 25, // Bigger font size for the name
        fontWeight: 'ultrabold', // Bolder font for the name
        flexDirection: 'row', // Display contacts in a row
        flexWrap: 'wrap', // Allow wrapping if the content overflows
        justifyContent: 'center', // Center the contacts horizontally
        marginTop: 8 // Space above the contacts
    },
    title: {
        fontSize: 20, // Bigger font size for the name
        fontWeight: 'bold', // Bolder font for the name
        marginBottom: 10 // Space below the name
    },
    contacts: {
        flexDirection: 'row', // Display contacts in a row
        flexWrap: 'wrap', // Allow wrapping if the content overflows
        justifyContent: 'center', // Center the contacts horizontally
        marginTop: 5 // Space above the contacts
    },
    section: {
        margin: 10,
        padding: 5,
        borderTop: '2 solid black', // Underline before each section
        paddingTop: 10 // Space above the section content
    },
    content: {
        marginLeft: 8
    },
    tableHeader: {
        marginLeft: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tableContent: {
        marginLeft: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

// Create Document Component
const PDFFile = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.name}>Janine M. Memoracion</Text>
                <View style={styles.contacts}>
                    <View style={styles.contacts}>
                        <Text>09617334599</Text>
                        <Text> | </Text>
                    </View>
                    <View style={styles.contacts}>
                        <Text>janinememo@gmail.com</Text>
                        <Text> | </Text>
                    </View>
                    <View style={styles.contacts}>
                        <Text>www.test.com</Text>
                        <Text> | </Text>
                    </View>
                    <View style={styles.contacts}>
                        <Text>Tacloban City</Text>
                        <Text> Leyte</Text>
                        <Text> 6500</Text>
                    </View>


                </View>

            </View>
            <View style={styles.section}>
                <Text style={styles.title}>Career Objectives</Text>
                <Text style={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.title}>Educational Background</Text>
                <View style={styles.tableHeader}>
                    <Text>Institute Name</Text>
                    <Text>Degree</Text>
                    <Text>Graduation Year</Text>
                </View>
                <View style={styles.tableContent}>
                    <Text>Leyte Normal University</Text>
                    <Text>Bachelor of Science in Information Technology</Text>
                    <Text>2015</Text>
                </View>
                <View style={styles.tableContent}>
                    <Text>Leyte Normal University</Text>
                    <Text>Bachelor of Science in Information Technology</Text>
                    <Text>2015</Text>
                </View>
                <View style={styles.tableContent} >
                    <Text>Leyte Normal University</Text>
                    <Text>Bachelor of Science in Information Technology</Text>
                    <Text>2015</Text>
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.title}>Work Experience</Text>
                <View style={styles.tableHeader}>
                    <Text>Company Name</Text>
                    <Text>Position</Text>
                    <Text>Work Year</Text>
                </View>
                <View style={styles.tableContent}>
                    <Text>ABC Startup</Text>
                    <Text>Lead Developer</Text>
                    <Text>2015</Text>
                </View>
                <View style={styles.tableContent}>
                    <Text>ABC Startup</Text>
                    <Text>Lead Developer</Text>
                    <Text>2015</Text>
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.title}>Certification</Text>
                <View style={styles.tableHeader}>
                    <Text>Certification Title</Text>
                    <Text>About</Text>
                    <Text>Year Acquired</Text>
                </View>
                <View style={styles.tableContent}>
                    <Text>CISCO I</Text>
                    <Text>Networking</Text>
                    <Text>2015</Text>
                </View>
                <View style={styles.tableContent}>
                    <Text>CISCO I</Text>
                    <Text>Networking</Text>
                    <Text>2015</Text>
                </View>
            </View>
        </Page>
    </Document>
);

export default PDFFile;
