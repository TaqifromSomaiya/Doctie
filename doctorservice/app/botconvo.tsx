import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView,KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import axios from 'axios';

type Message = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

const BotScreen = () => {
  const [userQuery, setUserQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

 

  const handleSendMessage = async () => {
    if (userQuery.trim() === '') return;
  
    const newMessages: Message[] = [...messages, { role: 'user', content: userQuery }];
    setMessages(newMessages);
    setUserQuery('');
  
    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-4',
        messages: [
          { role: 'system', content: 'You are a medical expert. Reply in a three-line format: 1st: Analyze the problem, 2nd: Suggest a remedy, 3rd: Suggest a medicine.' },
          ...newMessages,
        ],
        max_tokens: 150,
      }, {
        headers: {
          'Authorization': `Bearer ${apiKey }`,
          'Content-Type': 'application/json',
        },
      });
    
      const botResponse = response.data.choices[0].message.content;
      setMessages([...newMessages, { role: 'assistant', content: botResponse }]);
    } catch (error) {
      // Check if the error is an AxiosError
      if (axios.isAxiosError(error)) {
        console.error('Error communicating with ChatGPT:', error.response ? error.response.data : error.message);
      } else {
        // If it's not an Axios error, log the generic error message
        console.error('Unknown error:', error);
      }
    }
    
    
  };
  
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.chatContainer}>
          <ScrollView style={styles.messageContainer}>
            {messages.map((msg, index) => (
              <View key={index} style={msg.role === 'user' ? styles.userMessage : styles.botMessage}>
                <Text style={styles.messageText}>{msg.content}</Text>
              </View>
            ))}
          </ScrollView>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={userQuery}
              onChangeText={setUserQuery}
              placeholder="Ask your question..."
              onFocus={() => Keyboard.dismiss()} // Dismiss keyboard when input is focused
            />
            <TouchableOpacity onPress={handleSendMessage} style={styles.sendButton}>
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Image source={require('../assets/images/docbotp.png')} style={styles.botImage} />
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20,
  },
  chatContainer: {
    flex: 1,
    marginLeft: 70,
    padding: 10,
    justifyContent: 'flex-end',
  },
  messageContainer: {
    flex: 1,
    paddingBottom: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
    borderRadius: 8,
    marginVertical: 5,
    padding: 5,
    right:20,
    maxWidth: '75%',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#ECECEC',
    borderRadius: 8,
    marginVertical: 5,
    padding: 10,
    left:25,
    maxWidth: '75%',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  botImage: {
    width: 280,
    height: 500,
    position: 'absolute',
    borderRadius: 0,
    left: -105,
    bottom: 220,
  },
});

export default BotScreen;
