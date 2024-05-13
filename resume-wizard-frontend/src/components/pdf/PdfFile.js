import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

// Create Document Component
const PDFFile = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.title}>Section #1</Text>
                <Text>sdfgsd</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.title}>Section #2</Text>
                <Text>asdfsdglmsdlkfgmsldkfgmkdskgfasdfre</Text>
            </View>
        </Page>
    </Document>
);

export default PDFFile;
