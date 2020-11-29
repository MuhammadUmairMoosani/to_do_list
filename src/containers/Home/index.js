import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const Home = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [updateId, setUpdateId] = useState('');
  const renderItem = ({item}) => {
    return (
      <View style={styles.listContainer}>
        <Text>{item.name}</Text>
        {updateId != item.id ? (
          <View style={styles.btnCon}>
            <TouchableOpacity activeOpacity={1} onPress={() => editTodo(item)}>
              <Image
                style={styles.image}
                source={require('../../assets/icons/edit.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => deleteTodo(item.id)}>
              <Image
                style={styles.deleteImage}
                source={require('../../assets/icons/delete.png')}
              />
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    );
  };
  const addTodo = () => {
    if (text) {
      let prevData = list;
      prevData.push({id: prevData.length + 1, name: text});
      setList(prevData);
      setText('');
    }
  };

  const deleteTodo = (id) => {
    let prevData = [...list];
    prevData.splice(
      prevData.indexOf(prevData.find((data) => data.id === id)),
      1,
    );
    setList(prevData);
  };

  const editTodo = (item) => {
    setText(item.name);
    setUpdateId(item.id);
    setIsEdit(true);
  };

  const updateTodo = () => {
    if (text) {
      let prevData = list;
      let index = prevData.indexOf(
        prevData.find((data) => data.id === updateId),
      );
      prevData[index].name = text;
      setList(prevData);
      setIsEdit(false);
      setUpdateId('');
      setText('');
    }
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.textInputContainer}>
            <TextInput
              onChangeText={(text) => setText(text)}
              style={styles.textInput}
              placeholder="Enter task here"
              value={text}
            />
          </View>
          {isEdit ? (
            <TouchableOpacity activeOpacity={1} onPress={updateTodo}>
              <Image
                source={require('../../assets/icons/update.png')}
                style={styles.image}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity activeOpacity={1} onPress={addTodo}>
              <Image
                source={require('../../assets/icons/add.png')}
                style={styles.image}
              />
            </TouchableOpacity>
          )}
        </View>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          contentContainerStyle={{paddingBottom: 70}}
        />
      </SafeAreaView>
    </>
  );
};

export default Home;
