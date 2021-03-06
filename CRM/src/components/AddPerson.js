import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from './../actions';

class AddPerson extends Component {

  static navigationOptions = {
    tabBarLabel: 'Add Person',
    tabBarIcon: ({tintColor}) => (
      <Image 
        style={styles.addButton}
        source={require('./../images/add_button.png')}
      />
    )
  };

  onAddPresss () {
    const { first_name, last_name, phone, email, company, project, notes } = this.props;

    this.props.createNewContact({ first_name, last_name, phone, email, company, project, notes });

    this.props.navigation.navigate('PeopleList');
  }

  render () {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <Text style={styles.title}>Add a new contact</Text>
          <TextInput style={styles.fieldStyles}
            placeholder={'First name...'}
            value={this.props.first_name}
            onChangeText={(value) => this.props.formUpdate({ prop: 'first_name', value })}
          />
          <TextInput style={styles.fieldStyles}
            placeholder={'Last name...'}
            value={this.props.last_name}
            onChangeText={(value) => this.props.formUpdate({ prop: 'last_name', value })}
          />
          <TextInput style={styles.fieldStyles}
            placeholder={'Phone number...'}
            value={this.props.phone}
            onChangeText={(value) => this.props.formUpdate({ prop: 'phone', value })}
          />
          <TextInput style={styles.fieldStyles}
            placeholder={'Company...'}
            value={this.props.company}
            onChangeText={(value) => this.props.formUpdate({ prop: 'company', value })}
          />
          <TextInput style={styles.fieldStyles}
            placeholder={'Project...'}
            value={this.props.project}
            onChangeText={(value) => this.props.formUpdate({ prop: 'project', value })}
          />
          <TextInput style={styles.fieldStyles}
            placeholder={'Notes...'}
            value={this.props.notes}
            onChangeText={(value) => this.props.formUpdate({ prop: 'notes', value })}
          />
          <View style={styles.add}>
            <Button title={'ADD'} onPress={this.onAddPresss.bind(this)} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    paddingTop: 50,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
  },
  fieldStyles: {
    height: 40,
    color: 'orange',
  },
  addButton: {
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  add: {
    marginTop: 30,
  },
});

const mapStateToProps = (state) => {
  const { first_name, last_name, phone, email, company, project, notes } = state;
  return { first_name, last_name, phone, email, company, project, notes };
};

export default connect(mapStateToProps, actions)(AddPerson);
