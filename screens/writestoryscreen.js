import * as React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import db from '../config';

export default class WriteStoryScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            author: '',
            story: '',
        }
    }

    submitStory = () => {
        db.ref('stories/').update({
            [this.state.title + ' by ' + this.state.author]: this.state.story,
        });

        this.setState({ title: '', author: '', story: '', });
    }

    render() {
        return (
            <View>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => {
                        this.setState({ title: text });
                    }}
                    value={this.state.title}
                    placeholder={'Title of Story'} />

                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => {
                        this.setState({ author: text });
                    }}
                    value={this.state.author}
                    placeholder={'Author Name'} />

                <TextInput
                    multiline={true}
                    style={styles.textInput1}
                    onChangeText={(text) => {
                        this.setState({ story: text });
                    }}
                    value={this.state.story}
                    placeholder={'Write your story...'} />

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={this.submitStory}>
                    <Text style={{ color: '#3A3042', fontSize: 20 }}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: '80%',
        height: 30,
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'black',
    },
    textInput1: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: '80%',
        height: 100,
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'black',
    },
    submitButton: {
        alignSelf: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        width: '40%',
        height: 100,
        borderRadius: 100,
        backgroundColor: '#FF784F',
        marginTop: 50,
    }
});