import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { Text, View } from 'react-native';


class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {

        return (
            <ScrollView>
                <Card
                    title='Contact Information'
                    wrapperStyle={{ margin: 20 }}
                >
                    <Text>1 Nucamp Way</Text>
                    <Text>Seattle, WA 98001</Text>
                    <Text style={{ marginBottom: 20, fontWeight: 'bold', color: 'blue', marginLeft: '12%' }}>U.S.A.</Text>
                    <Text>
                        <Text style={{ fontWeight: 'bold' }}>Phone: </Text>
                        1-206-555-1234
                    </Text>
                    <Text>
                        <Text style={{ fontWeight: 'bold' }}>E-mail: </Text>
                        campsites@nucamp.co
                    </Text>

                </Card>
            </ScrollView>
        );
    }
}

export default Contact;