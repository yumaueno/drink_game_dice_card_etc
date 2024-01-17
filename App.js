import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Modal, Image } from 'react-native';

export default function App() {
  const [currentDirective, setCurrentDirective] = useState("");
  const [inputDirective, setInputDirective] = useState("");
  const [directives, setDirectives] = useState([
    "自分だけ豪快にイッキ！",
    "右隣の人と乾杯してイッキ！",
    "左隣の人と乾杯してイッキ！",
    "全員で乾杯してイッキ！",
    "男性全員で乾杯してイッキ",
    "女性全員で乾杯してイッキ",
    "飲ませたい人を指差してイッキ",
    "全員で飲ませたい人を指差してイッキ",
    "たけのこニョッキッキで負けた人イッキ",
    "山手線ゲームで負けた人イッキ",
    "黒い服を着ている人イッキ！",
    "白い服を着ている人イッキ！",
    "メガネをかけている人イッキ！",
    "ジャンケンで負けた人イッキ！",
    "ジャンケンで勝った人イッキ！",
    "年齢が奇数の人イッキ！",
    "年齢が偶数の人イッキ！",
    "今月誕生日の人イッキ！",
    "全員左隣の人の飲み物をイッキ！",
    "全員右隣の人の飲み物をイッキ！",
    "ピアスをしている人イッキ！",
    "帽子をかぶっている人イッキ！",
    "今日初めて会った人と乾杯してイッキ！",
    "ビールを飲んでいる人イッキ！",
    "ワインを飲んでいる人イッキ！",
    "最初に席に座った人イッキ！",
    "最後に席に座った人イッキ！",
    "今、笑顔の人イッキ！",
    "足を組んでいる人イッキ！",
    "最も遠くから来た人イッキ！",
    "最も近くから来た人イッキ！",
    "ペットを飼っている人イッキ！",
    "一番直近で旅行に行った人イッキ！",
    "携帯の残量が50%以下の人イッキ！",
    "名前に「こ」が入っている人イッキ！",
    "髪の毛が一番長い人イッキ！",
    "髪の毛が一番短い人イッキ！",
    "Instagramのフォロワーが500人以上の人イッキ！",
    "Twitterのフォロワーが500人以上の人イッキ！",
    "最も身長が高い人イッキ！",
    "全員でお酒が強い人を指して一番集まった人イッキ！",
    "一番遠くの国を訪れたことがある人イッキ！",
    "一番多くの国を訪れたことがある人イッキ！",
    "時計をしている人イッキ！",
    "最も早く起きた人イッキ！",
    "無人島に一人だけ連れて行くとしたら選ぶ人とイッキ！",
    // 若干ハード要素
    "一番エッチしたい人とイッキ！",
    "一番キスしたい人とイッキ！",
    "一番デートしたい人とイッキ！",
    "一番付き合いたい人とイッキ！",
    "一番結婚したい人とイッキ！",
    "一番旅行に行ったら楽しそうな人とイッキ！",
  ]);
  const [modalVisible, setModalVisible] = useState(false);

  const getRandomDirective = () => {
    const randomIndex = Math.floor(Math.random() * directives.length);
    setCurrentDirective(directives[randomIndex]);
  };

  const addDirective = () => {
    if (inputDirective.trim() !== "") {
      setDirectives([...directives, inputDirective]);
      setInputDirective("");
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>飲み会指令アプリ</Text>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.directiveText}>{currentDirective || "指令を出すボタンを押してください"}</Text>
        <TouchableOpacity style={styles.button} onPress={getRandomDirective}>
          <Text style={styles.buttonText}>指令を出す</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.addButton]} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>指令を追加</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput 
              style={styles.input}
              value={inputDirective}
              onChangeText={setInputDirective}
              placeholder="新しい指令を入力..."
            />
            <TouchableOpacity style={styles.button} onPress={addDirective}>
              <Text style={styles.buttonText}>追加する</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>閉じる</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Image
        source={require('./assets/beer-image.png')}
        style={styles.beerImage}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#FFF3E0',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFB300',
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: '#FFFDE7',
  },
  directiveText: {
    fontSize: 24,
    textAlign: 'center',
    color: '#FF6F00',
    fontWeight: 'bold',
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#FFFDE7',
    margin: 20,
    minHeight: 100,
  },
  input: {
    width: '80%',
    height: 40,
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#FFB300',
    backgroundColor: '#FFFDE7',
  },
  button: {
    backgroundColor: '#FFB300',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    margin: 10,
    alignSelf: 'center',
  },
  addButton: {
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFDE7',
    fontSize: 18,
    fontWeight: '600',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '90%', // モーダルの横幅を調整
    backgroundColor: '#FFFDE7',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  beerImage: {
    width: '100%',
    height: 200,
    marginBottom: 150
  },
});
