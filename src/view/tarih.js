import * as React from "react";
import { Text, Image, ScrollView } from "react-native";
const Tarih = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Image
        source={{
          uri: "https://www.gagiad.org.tr/uploads/sehrin-tarihcesi-EwjRkp.jpg",
        }}
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#dcdcdc",
          width: 400,
          height: 280,
        }}
      />
      <Text
        style={{
          flex: 1,
          flexDirection: "row",
          width: 400,
          height: 1000,
          fontSize: 15,
          fontWeight: 'normal',
          backgroundColor: "#dcdcdc",
          color: "black",
        }}
      >
        Tarih boyunca Anadolu'da kurulan ve Anadolu'ya egemen olan tüm devletler
        için önemli bir merkez olmuştur. Gaziantep, Roma İmparatorluğu zamanında
        bir sınır şehri idi. M.S. 395 yılında Roma İmparatorluğu ikiye ayrılınca
        Bölge; Doğu Roma İmparatorluğu ( Bizans ) sınırları içerisinde
        kalmıştır. İslamiyet'in yayılmasından itibaren bölge, İslam ordularının
        akınına uğramıştır. Gaziantep, Bizans'ın bir uç şehri haline gelerek
        stratejik bir konuma girmiştir. Bizans bölgeyi kaybetmemek için özel
        önem vermiştir. Bölge zaman zaman Araplarla Bizanslılar arasında el
        değiştirmiştir. Abbasi Halifesi Harun Reşid, 782 yılında bölgeyi
        fethederek 'Avasım' şehri haline dönüştürdü. Bölge 1067 yılında
        Türklerin egemenliğine girdi. Bu tarihten sonra Gaziantep ve çevresi
        Anadolu Selçuklu Devleti ile Suriye Selçukluları egemenliğinde yer aldı.
        Haçlı Orduları 1098 yılında bölgeyi işgal ettiler. Gaziantep, önce
        Edessa ( Urfa ) Kontluğuna bir müddet sonra da Maraş Senyörlüğüne
        bağlandı. Bölge 1150 yılında Haçlılardan kurtarılarak tekrar Anadolu
        Selçuklu Devleti'ne bağlandı. Ancak bölgede istikrar sağlanamadı. Bölge
        Anadolu Selçukluları ile Suriye'de kurulan Atabeyliklerin çatışma alanı
        oldu. Bölge 1258 yılında Moğolların istilasına uğradı. Memlûk Devleti,
        1260 yılında Gaziantep'i Moğol istilasından kurtararak sınırları içine
        aldı. Memlûkların sınır şehri olan Gaziantep, bu defa da Maraş'ta
        kurulan Dulkadir Beyliği'nin almak için mücadele ettiği bir şehir haline
        geldi. XIV. yüzyılın sonlarında başlayan bu mücadele bölgeye
        Osmanlıların gelmesine kadar devam etti. 1516 yılında Gaziantep'e gelen
        Yavuz Sultan Selim bölgeyi Arap Eyaletine bağlı bir sancak merkezi
        yaptı. Gaziantep 1531 yılında Dulkadir Beylerbeyliği'ne (Maraş Eyaleti)
        bağlandı. Bu durum 1830 tarihine kadar devam etti. Ancak 1818-1830
        yılları arasında Antep Sancağının vergi gelirleri Halep Eyaletine tahsis
        edildi. 1830 yılında Antep kaza merkezi yapılarak Halep Eyaletine
        bağlandı. Antep, kısa bir dönem Mısır Hidivliği tarafın­dan işgal
        edildiyse de tekrar Osmanlı yönetiminde Halep Eyaletine bağlandı. Antep,
        1908 yılında yapılan idari düzenlemede sancak merkezi oldu. 1913 yılında
        Kilis ve Halfeti Antep Sancağına bağlandı. 1918 tarihinde Halep'in
        İngilizler tarafından işgal edilmesi üzerine bağımsız sancak oldu.
        Cumhuriyetin ilanından sonra, 1924 yılında tüm sancaklar kaldırılarak il
        statüsüne dönüştürüldü. 1926 yılında Halfeti ilçesi bucak merkezine
        dönüştürülerek Şanlıurfa iline, buna karşılık Nizip bucağı ilçe
        yapılarak Gaziantep'e bağlandı. 1933 yılında Kahramanmaraş ilinden
        Pazarcık ile Osmaniye ilinin kaldırılması sonucu buraya bağlı İslahiye
        ilçesi Gaziantep'e bağlandı. Bir müddet sonra Pazarcık ilçesi tekrar
        Kahramanmaraş iline bağlandı. 1946 yılında Oğuzeli ilçesi, 1957 yılında
        ise Araban ve Yavuzeli ilçeleri kurularak Gaziantep'e bağlandı. 1989
        yılında Büyükşehir Belediyesi kurularak, Merkezde Şahinbey ve Şehitkamil
        ilçeleri oluşturulmuştur. 1991 yılında Nizip İlçesi'nden Karkamış,
        İslahiye İlçesi'nden Nurdağı ayrılarak ilçe olmuştur. 1995 yılında
        Oğuzeli ilçesine bağlı Elbeyli Bucağı ve köy­leri Kilis iline
        bağlanmıştır.{" "}
      </Text>
    </ScrollView>
  );
};

export default Tarih;
