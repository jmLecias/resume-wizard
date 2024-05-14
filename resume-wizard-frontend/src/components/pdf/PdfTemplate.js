import React, {useEffect} from "react";
import { Page, Text, View, Document, Image, StyleSheet } from "@react-pdf/renderer";

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

const PdfTemplate = ({ details }) => {

    const name = details.personal.firstName + ' ' +
        details.personal.middleName.substring(0, 1) + '. ' +
        details.personal.lastName;

    const renderEducation = () => {
        return details.education.map((education, index) => (
            <View style={styles.tableContent} key={index}>
                <Text>{education.institute}</Text>
                <Text>{education.degree}</Text>
                <Text>{education.graduationYear}</Text>
            </View>
        ))
    };
    
    const renderWork = () => {
        return details.work.map((work, index) => (
            <View style={styles.tableContent} key={index}>
                <Text>{work.company}</Text>
                <Text>{work.position}</Text>
                <Text>{work.workYear}</Text>
            </View>
        ))
    };

    const renderCertifications = () => {
        return details.certification.map((certification, index) => (
            <View style={styles.tableContent} key={index}>
                <Text>{certification.certificate}</Text>
                <Text>{certification.about}</Text>
                <Text>{certification.yearAcquired}</Text>
            </View>
        ))
    };
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.name}>{name}</Text>
                    <View style={styles.contacts}>
                        <View style={styles.contacts}>
                            <Text>{details.personal.phoneNumber}</Text>
                            <Text> | </Text>
                        </View>
                        <View style={styles.contacts}>
                            <Text>{details.personal.email}</Text>
                            <Text> | </Text>
                        </View>
                        <View style={styles.contacts}>
                            <Text>{details.personal.website}</Text>
                            <Text> | </Text>
                        </View>
                        <View style={styles.contacts}>
                            <Text>{details.personal.city}, </Text>
                            <Text>{details.personal.stateProvince}, </Text>
                            <Text>{details.personal.zip}</Text>
                        </View>

                    </View>

                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>Career Objectives</Text>
                    <Text style={styles.content}>
                        {details.objective.careerObjective}
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>Educational Background</Text>
                    <View style={styles.tableHeader}>
                        <Text>Institute Name</Text>
                        <Text>Degree</Text>
                        <Text>Graduation Year</Text>
                    </View>
                    {renderEducation()}
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>Work Experience</Text>
                    <View style={styles.tableHeader}>
                        <Text>Company Name</Text>
                        <Text>Position</Text>
                        <Text>Work Year</Text>
                    </View>
                    {renderWork()}
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>Certification</Text>
                    <View style={styles.tableHeader}>
                        <Text>Certification Title</Text>
                        <Text>About</Text>
                        <Text>Year Acquired</Text>
                    </View>
                    {renderCertifications()}
                </View>
            </Page>
        </Document>
    );
}

export default PdfTemplate;