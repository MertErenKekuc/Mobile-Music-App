import React,{useState} from "react";
import { SafeAreaView,View,Text,StyleSheet,FlatList} from "react-native";
import music_data from './music-data.json'
import SongCard  from "./components/SongCard";
import SearchBar from "./components/SongCard/SearchBar/SearchBar";

function App() {
    const [list,setList] = useState(music_data);

    const renderSong = ({item}) => <SongCard song={item} />;

    const renderSeperator = () => <View style={styles.seperator} />
    
    const handleSearch = text => {
        const filteredList = music_data.filter(song => {
          const searchedText = text.toLowerCase(); //input'a giirlen text
          const currentTitle = song.title.toLowerCase(); //her item(song)
    
          return currentTitle.indexOf(searchedText) > -1; //girilen text içinde index'leri eşleştir (0,1,2...)
        });
        setList(filteredList);
      };

    return(
            <View style={styles.container}>
            <SearchBar onSearch={handleSearch} />
               <FlatList
               keyExtractor={item => item.id}
               data={list}
               renderItem={renderSong}
               ItemSeparatorComponent={renderSeperator}
// daha iyi performans için üstte: renderItem={({item}) => <Text>{item.title}</Text>} 
               />
            </View> 
    );
};

export default App;

const styles = StyleSheet.create({
    container: {flex:1},
    seperator: {
        borderWidth: 1,
        borderColor: 'lightgrey',
    }
});