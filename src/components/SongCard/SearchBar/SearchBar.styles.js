import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#ffcccc',
        margin: 10, // Biraz daha geniş kenar boşlukları
        borderRadius: 10, // Daha belirgin köşe yuvarlama
        padding: 1, // Daha geniş içerik alanı
        shadowColor: '#888',
        shadowOffset: { width: 1, height: 3 }, // Gölge boyutları
        shadowOpacity: 0.2, // Gölge opaklığı
        shadowRadius: 3, // Gölge yarıçapı
        elevation: 5, // Android'de gölge efekti için
        },
    title: {
        color: 'black',
        fontSize: 16,
        fontStyle: 'italic',
        fontWeight: '500'
    }
})
