import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    borderColor: '#CBCBCB',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5E8E8',
    borderRadius: 50,
    marginTop: 10,
    marginHorizontal: 5,
  },
  image: {
    marginHorizontal: 10,
    width: 40,
    height: 40,
  },
  deleteImage: {
    width: 40,
    height: 40,
  },
  textInput: {
    paddingLeft: 15,
  },
  textInputContainer: {
    flex: 1,
  },
  btnCon: {
    flexDirection: 'row',
  },
});

export default styles;
