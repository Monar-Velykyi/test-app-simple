import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity

} from 'react-native';

const App: () => React$Node = () => {

  const [messageInput, setMessageInput] = useState('');
  const [numberInput, setNumberInput] = useState('');
  const [messagesAmount, setMessageAmount] = useState(0)
  

  const getNumberOfSms = () => {

  if (messageInput.length >= numberInput && messageInput.length !== 0) {

    const checkChar = (char) => {
      return !!char.match(/(-[^a-zA-Z])|\w*\d\w*|[^a-zA-Z-]+$/)
    }
    
    const checkSms = (text, smsLength) => {
      let currentCursor = smsLength
      while ((currentCursor >= 0 && !checkChar(text[currentCursor]))) {
        currentCursor--
      }
      return currentCursor
    }
    
    const getPartedSms = (text, smsLength) => {
      
      let currentText = text;
      let neededSms = 1
    
      while (currentText.length > smsLength) {
        const next = checkSms(currentText, smsLength);
        currentText = currentText.substring(next, text.length);
        neededSms++
      }
      return neededSms
    }
  
  return getPartedSms(messageInput,numberInput)

    } else if (messageInput.length > 0 && messageInput.length < numberInput) return 1;

      else return 0;
}


  return (
    <>
      <StatusBar/>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.messageInputView}>
            <TextInput
              style={styles.messageInput}
              multiline
              onChangeText={(val) => setMessageInput(val)}
              >
            </TextInput>
          </View>
          <View style={styles.numbersInputView}>
            <TextInput
              style={styles.numbersInput}
              onChangeText={(val) => setNumberInput(val)}>
            </TextInput>
            <Text style={styles.numbersInputText}>
                  Символов
            </Text>
          </View>
          <View style={styles.buttonView}>
            <TouchableOpacity
            onPress={() => setMessageAmount(getNumberOfSms())}>
              <Text style={styles.buttonText}>
                Посчитать кол-во СМС
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.messagesAmountView}>
            <Text style={styles.messagesAmountText}>
              Надо СМС: {messagesAmount}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 20
  },
  messageInputView: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  messageInput: {
    width: 300, 
    height: 200,
    padding: 10,
    paddingTop: 10,
    marginBottom: 10,
    alignItems: 'center',  
    borderColor: 'gray', 
    borderWidth: 1, 
    borderRadius:10
  },
  numbersInputView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
      
  },
  numbersInput: {
    width: 90, 
    height: 40, 
    textAlign: 'center',
    fontSize: 20,
    borderColor: 'gray', 
    borderWidth: 1, 
    borderRadius:10,
    marginRight: 40
  },
  numbersInputText: {
    fontSize: 20, 
    color: 'black'
  },
  buttonView: {
    width:250, 
    height: 50,
    marginTop: 10, 
    borderRadius:10, 
    backgroundColor: '#6495ED', 
    justifyContent: 'center', 
    alignItems: 'center', 
    alignContent: 'center', 
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 20, 
    color: 'white'
  },
  messagesAmountView: {
    marginTop:20, 
    alignItems: 'center'
  },
  messagesAmountText: {
    fontSize: 20, 
    color: 'black'
  }
});

export default App;
