import * as React from "react";
import { Image, StyleSheet, ScrollView, Text } from "react-native";

function Yemek() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Image
        source={{
          uri: "https://antepyoreselurunler.com/wp-content/uploads/2022/12/antep-lahmacun-768x432.jpg.webp",
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
          height: 200,
          fontSize: 15,
          fontWeight: "normal",
          backgroundColor: "#dcdcdc",
          color: "black",
        }}
      >
        Antep Lahmacun Antep lahmacunu, diğer illerle özdeşmiş lahmacun
        çeşitlerinden çok daha ön sırada yer almaktadır. Kendine has pide fırını
        kültürü olan Gaziantep’te, istediğiniz zaman iç harcını götürüp lahmacun
        yaptırabilirsiniz. İç harcını yapmak için her hangi bir kasaba
        başvurmanız yeterli olacaktır. Kültür olarak fırın, kasap ve bakkal yan
        yana bulunmaktadır. Gaziantep lahmacunu içerisinde kıyma, maydanoz,
        yeşilbiber, domates, salça; baharatlardan tuz ve kırmızı pul biber
        bulunmaktadır. Pidesinin ince açılması, odun ateşi fırınında pişmesi
        sayesinde çıtır çıtır bir lahmacun elde edilmektedir.
      </Text>
      <Image
        source={{
          uri: "https://antepyoreselurunler.com/wp-content/uploads/2022/12/patlican-kebabi-768x432.jpg.webp",
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
          height: 250,
          fontSize: 15,
          fontWeight: "normal",
          backgroundColor: "#dcdcdc",
          color: "black",
        }}
      >
        Patlıcan Kebabı Patlın kebabı iki şekilde yapılmaktadır. Bunlardan ilki
        en klasik yöntem olup fırında tepsi içerisinde olandır. Diğeri ise şiş
        kebap şeklinde mangalda yapılandır. Ortalama aynı tadı vermektedir ama
        gurme insanlar arasındaki farkı kolaylıkla fark edebilir. Gaziantep
        patlıcan kebabı yapımında kullanılacak patlıcan çok önemlidir. Uzun ve
        siyah patlıcan, bu yemek için en uygun patlıcan çeşididir.
        Gaziantepliler in deyimiyle ‘’berecik balcanı’ yani; Şanlıurfa’nın
        Birecik ilçesinde yetişen bir patlıcan türü. Patlıcan kebabı yapımında
        kullanılacak olan Birecik patlıcanını her yerde bulamayabilirsiniz, ona
        en yakın olan uzun ve siyah patlıcan kullanabilirsiniz. Gaziantep’e
        geldiğiniz zaman bu patlıcanla yapılan yemeği yiyeceğiniz kesindir.
      </Text>
      <Image
        source={{
          uri: "https://antepyoreselurunler.com/wp-content/uploads/2022/12/sogan-kebabi-768x403.jpg.webp",
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
          height: 255,
          fontSize: 15,
          fontWeight: "normal",
          backgroundColor: "#dcdcdc",
          color: "black",
        }}
      >
        Soğan Kebabı Soğan kebabı yemeğini daha önce duymuş olmama ihtimaliniz
        çok yüksek. Gaziantep yöresel yemekleri içerisinde en dikkat çeken
        farklı lezzetlerden biriside şüphesiz soğan kebabıdır. Bildiğimiz iri
        soğanlardan değil, minik minik tatlı soğanlardan yapılan bu yemeği
        kesinlikle yapıp aile boyu tatmalısınız. Kabuğu soyulmadan ikiye yarılıp
        (tam kopmadan) içerisine kıyma yerleştirerek işe başlanmalıdır. Resimde
        de gördüğünüz gibi bir tepsi içerisine domino taşları benzeri
        düzüyorsunuz. Genelde soğan ve kıyma haricinde başka bir şey
        içermemektedir ama kimileri nar ekşisi ekleyerek daha hoş bir tat elde
        etmektedir. Nar ekşili yapmak için tepsiye soğanları düzmezden önde nar
        ekşisini dökerek tepsinin her yerine eşit şekilde dağıtmanız yeterli
        olacaktır.
      </Text>
      <Image
        source={{
          uri: "https://antepyoreselurunler.com/wp-content/uploads/2022/12/sarimsak-kebabi-e1671311888888.jpg.webp",
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
          height: 150,
          fontSize: 15,
          fontWeight: "normal",
          backgroundColor: "#dcdcdc",
          color: "black",
        }}
      >
        Sarımsak Kebabı Sarımsak kebabı da soğan kebabı gibi çok bilinen bir
        yemek değildir. Yoğun sarımsak barındıran bu yemek pişince ağır kokusu
        kalmamaktadır. Mevsimlik bir yemek olmasının nedeniyse taze sarımsaktan
        yapılıyor olmasıdır. Mevsiminde 1 ay kadar kısıtlı bir zamanda toplanan
        sarımsaklar ikiye yarılarak arasına kıyma konulmasından ibarettir.
        Vitamin deposu bu yemeği kesinlikle denemeniz gerekmektedir.
      </Text>
      <Image
        source={{
          uri: "https://antepyoreselurunler.com/wp-content/uploads/2022/12/icli-kofte-768x434.jpg.webp",
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
          height: 130,
          fontSize: 15,
          fontWeight: "normal",
          backgroundColor: "#dcdcdc",
          color: "black",
        }}
      >
        İçli Köfte İçli köfte deninde en başta Gaziantep yöremiz akıllara
        gelmektedir. Birçok yöremizde içliköfte farklı farklı şekillerde
        yapılmaktadır ama bunların içerisinde en çok beğenilen Gaziantep yöresel
        yemekleri içerisinde bulunan Antep içli köftesidir. Bölgeye has kuzu
        etinden yapılması ve iç harcının usta eller tarafından tam kararında
        olması önemli rol oynamaktadır.
      </Text>
      <Image
        source={{
          uri: "https://antepyoreselurunler.com/wp-content/uploads/2020/12/antep-usulu-dolma-tarifi-500x281.jpg.webp",
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
          height: 150,
          fontSize: 15,
          fontWeight: "normal",
          backgroundColor: "#dcdcdc",
          color: "black",
        }}
      >
        Antep Dolması Antep dolması yapmak için kurutulmuş sebze çeşitleri
        arasında kesinlikle Gaziantep kurutmalıklarından tercih etmekteyiz.
        Bilindiğinin aksine tek parça patlıcan kullanılarak patlıcan dolması,
        Antep topak biberi kullanılarak biber dolması, özel bir kabak olan
        Haylan kabağı kullanılarak ise kabak dolması yaptığınız takdirde çok
        lezzetli bir yemek elde etmiş olacaksınız. Antep dolması tarifi için
        tıklayınız…
      </Text>
      <Image
        source={{
          uri: "https://antepyoreselurunler.com/wp-content/uploads/2022/12/antep-yuvalama.jpg.webp",
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
          height: 130,
          fontSize: 15,
          fontWeight: "normal",
          backgroundColor: "#dcdcdc",
          color: "black",
        }}
      >
        Yuvalama Yuvalama, yuvarlama diye de telaffuz edilmektedir. Antep’in
        sulu yemekleri arasında en çok bilinen bu yemek, yoğurtlu yemekler
        kategorisindedir. Bu yemeğin yanında ise firik pilavı veya pirinç pilavı
        tercih edilmektedir. Firik pilavı ve Antep yuvalama yemeği her Ramazan
        bayramının ilk günü yapılıp kahvaltıda tüketilmektedir.
      </Text>
      <Image
        source={{
          uri: "https://antepyoreselurunler.com/wp-content/uploads/2022/12/siveydiz-768x763.jpg.webp",
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
          height: 130,
          fontSize: 15,
          fontWeight: "normal",
          backgroundColor: "#dcdcdc",
          color: "black",
        }}
      >
        Şiveydiz Şiveydiz yemeği yoğurtlu ve taze sarımsaklı bir yemek
        çeşididir. İçerisinde nohut ve kuzu eti bulunan şife deposu bir
        Gaziantep yemeğidir. Mevsiminde toplanan yeşil taze sarımsak ile
        yapılmasından dolayı mevsimlik bir yemektir. Pişme süresine ve
        malzemelerin eşitliği ve istenildiği şekilde olması, ev yemeği
        sevmeyenleri bile kendisine hayran bırakacaktır.
      </Text>
      <Image
        source={{
          uri: "https://antepyoreselurunler.com/wp-content/uploads/2022/12/eksili-kofte-768x577.jpg.webp",
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
          height: 75,
          fontSize: 15,
          fontWeight: "normal",
          backgroundColor: "#dcdcdc",
          color: "black",
        }}
      >
        Ekşili köfte, sanıldığının aksine sulu bir yemek çeşididir. Salçalı sulu
        yemek kategorisinde en üst Antep yemekleri arasında bulunan ekşili
        köfte, üzerine kavrulan nane ile çok farklı bir aromaya ve lezzete sahip
        olmaktadır.
      </Text>
      <Image
        source={{
          uri: "https://antepyoreselurunler.com/wp-content/uploads/2022/12/patlican-dogramasi-500x500.jpg.webp",
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
          height: 95,
          fontSize: 15,
          fontWeight: "normal",
          backgroundColor: "#dcdcdc",
          color: "black",
        }}
      >
        Patlıcan Doğraması Patlıcan doğraması, kurutulmuş patlıcanın uç
        kısımlarından yapılan sulu bir Antep Yemeğidir. Adından da anlaşılacağı
        gibi hafif ekşi ve nohutludur. İçerisinde kuşbaşı koyun eti ile
        patlıcan, nohut karışımı enfes bir yemektir.
      </Text>
      <Image
        source={{
          uri: "https://antepyoreselurunler.com/wp-content/uploads/2022/12/firik-pilavi-768x464.jpg.webp",
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
          height: 76,
          fontSize: 15,
          fontWeight: "normal",
          backgroundColor: "#dcdcdc",
          color: "black",
        }}
      >
        Firik Pilavı Firik pilavının ana malzemesi olan firik, buğdayın közde
        yakılmış şeklidir. Diğer adı yeşil buğday olan firiğin pilavı, yuvalama
        yanında veya kendi başına tavuklu-etli şekilde servis edilmektedir.
      </Text>
      <Image
        source={{
          uri: "https://antepyoreselurunler.com/wp-content/uploads/2022/12/lebeniye-corbasi.jpg.webp",
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
          height: 75,
          fontSize: 15,
          fontWeight: "normal",
          backgroundColor: "#dcdcdc",
          color: "black",
        }}
      >
        Lebeniye Çorbası Lebeniye çorbası yemeği, yoğurtlu bir yemek olup tüm
        illerimizde farklı isimlerle bilinmektedir. Gaziantep tarzının farkı,
        köy yoğurdunun süzülerek yemeğe katılmasından dolayıdır.
      </Text>
      <Image
        source={{
          uri: "https://antepyoreselurunler.com/wp-content/uploads/2022/12/pirpirim-asi-768x432.jpg.webp",
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
          height: 60,
          fontSize: 15,
          fontWeight: "normal",
          backgroundColor: "#dcdcdc",
          color: "black",
        }}
      >
        Pirpirim Aşı Pirpirim aşı, pirpirim denilen (semizotu) ile yapılan bir
        sulu yemektir. Semizotu ile yapılan bu yemek, Gaziantep yöremize ait bir
        sulu yemek çeşididir.
      </Text>
      <Image
        source={{
          uri: "https://antepyoreselurunler.com/wp-content/uploads/2022/12/pirpirim-salatasi.jpg.webp",
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
          height: 60,
          fontSize: 15,
          fontWeight: "normal",
          backgroundColor: "#dcdcdc",
          color: "black",
        }}
      >
        Pirpirim Salatası Pirpirim salatası, pirpirim (semizotu) ile yapılan çok
        sağlıklı bir salata çeşididir. Farklı lezzetler peşinde olanlar için
        alternatif bir salatadır.
      </Text>
      <Image
        source={{
          uri: "https://antepyoreselurunler.com/wp-content/uploads/2022/12/lolaz-asi.jpg.webp",
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
          height: 75,
          fontSize: 15,
          fontWeight: "normal",
          backgroundColor: "#dcdcdc",
          color: "black",
        }}
      >
        Lolaz Aşı (lolaz pilavı) Lolaz aşı, diğer ismiyle lolaz pilavı; batı
        illerimizde börüce denilen bakliyat çeşidiyle yapılan bir yemektir.
        Unutulmuş Antep yemekleri arasında listenin başlarında yer almaktadır.
      </Text>
      <Image
        source={{
          uri: "https://antepyoreselurunler.com/wp-content/uploads/2022/12/lolaz-salatasi.jpg.webp",
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
          height: 55,
          fontSize: 15,
          fontWeight: "normal",
          backgroundColor: "#dcdcdc",
          color: "black",
        }}
      >
        Lolaz Salatası Lolaz Salatası, börüce salatası diye de bilinmektedir. Bu
        ürünün pilavı yapıldığı gibi salatası da yapılmaktadır.
      </Text>
      <Image
        source={{
          uri: "https://antepyoreselurunler.com/wp-content/uploads/2022/12/sekerli-borek.jpg.webp",
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
          height: 75,
          fontSize: 15,
          fontWeight: "normal",
          backgroundColor: "#dcdcdc",
          color: "black",
        }}
      >
        Şekerli Börek Şekerli börek, Gaziantep mahalle fırınlarında yapılan bir
        yumurtalı fıstıklı üstü açık çok leziz bir börektir. Yağ olarak yine
        Gaziantep’e özgü sadeyağ kullanılarak çok farklı bir lezzet elde
        edilmektedir.
      </Text>
      <Image
        source={{
          uri: "https://antepyoreselurunler.com/wp-content/uploads/2022/12/sogurtme.jpg.webp",
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
          height: 55,
          fontSize: 15,
          fontWeight: "normal",
          backgroundColor: "#dcdcdc",
          color: "black",
        }}
      >
        Söğürtme Söğürtme; patlıcan, biber, domatesin fırında söğürtülerek
        doğranıp karıştırılmasından oluşan geleneksel bir Antep yemeğidir.
      </Text>
      <Image
        source={{
          uri: "https://antepyoreselurunler.com/wp-content/uploads/2022/12/mercimekli-kofte.jpg.webp",
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
          height: 75,
          fontSize: 15,
          fontWeight: "normal",
          backgroundColor: "#dcdcdc",
          color: "black",
        }}
      >
        Mercimekli Köfte Mercimekli köfte, Gaziantep’te malkıtalı köfte olarak
        da bilinmektedir. Markette satılan çok koyu renkli kırmızı mercimek
        yerine daha boz renkte olan kırmızı mercimek ile elde edilmektedir.
      </Text>
      <Image
        source={{
          uri: "https://antepyoreselurunler.com/wp-content/uploads/2022/12/malhitali-as-768x432.jpg.webp",
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
          height: 110,
          fontSize: 15,
          fontWeight: "normal",
          backgroundColor: "#dcdcdc",
          color: "black",
        }}
      >
        Malhıtalı Aş Malhıtalı aş, Antep’te kırmızı mercimek ve simit ile
        karışımı kışın çokça tercih edilen pilav benzeri hafif sulu bir
        lezzettir. Unutulmuş Antep yemekleri arasında yer alan bu yemek, günümüz
        hazır yemeklerinden çok daha uygun fiyata gelmekle beraber lezzeti
        arasında dağlar kadar fark bulunmaktadır.
      </Text>
      <Image
        source={{
          uri: "https://antepyoreselurunler.com/wp-content/uploads/2022/12/yagli-kofte.jpg.webp",
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
          height: 40,
          fontSize: 15,
          fontWeight: "normal",
          backgroundColor: "#dcdcdc",
          color: "black",
        }}
      >
        Yağlı Köfte Yağlı köfte, kadınların bir araya geldiğinde vazgeçilmez bir
        lezzet olan anlık yenen bir köftedir.
      </Text>
      <Image
        source={{
          uri: "https://antepyoreselurunler.com/wp-content/uploads/2022/12/tene-katmasi.jpg.webp",
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
          height: 60,
          fontSize: 15,
          fontWeight: "normal",
          backgroundColor: "#dcdcdc",
          color: "black",
        }}
      >
        Tene Katması Tene katması, Gaziantep ara öğün atıştırmalığıdır.
        Malzemeleri köfteye benzemektedir ama lezzeti ve soğuk tüketimi ile
        köfteden ayrılmaktadır.
      </Text>
      <Image
        source={{
          uri: "https://antepyoreselurunler.com/wp-content/uploads/2022/12/omac.jpg.webp",
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
          height: 60,
          fontSize: 15,
          fontWeight: "normal",
          backgroundColor: "#dcdcdc",
          color: "black",
        }}
      >
        Omaç Omaç, Gaziantep köfteleri içerisinde ekmek doğranarak yapılan bir
        köfte çeşididir. Omaç köftesi, ekmekli köfte ismi ile daha meşhur
        olmuştur.
      </Text>
      <Image
        source={{
          uri: "https://antepyoreselurunler.com/wp-content/uploads/2022/12/kombe.jpg.webp",
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
          height: 75,
          fontSize: 15,
          fontWeight: "normal",
          backgroundColor: "#dcdcdc",
          color: "black",
        }}
      >
        Kömbe Kömbe, hamur arası kıyma-soğan ile tepside fırınlanması sonucunda
        elde edilen; bu ilimizin en gözde yemeklerindendir. Tepsi börek gibi
        dilim dilim kesilerek servis edilmektedir.
      </Text>
      <Image
        source={{
          uri: "https://antepyoreselurunler.com/wp-content/uploads/2022/12/paca.jpg.webp",
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
          height: 110,
          fontSize: 15,
          fontWeight: "normal",
          backgroundColor: "#dcdcdc",
          color: "black",
        }}
      >
        Paça Antep paça çorbası, kuzu baş etlerinin saatlerce kaynatılıp
        kemiklerinden ayırtılarak ana malzemesi oluşturulmaktadır. İsteğe göre
        içerisine kuzu ayağı ve işkembede eklenerek çok daha farklı bir karışım
        elde edilmektedir. Sağlığa faydası saymakla bitmeyecek kadar çoktur.
      </Text>
      <Image
        source={{
          uri: "https://antepyoreselurunler.com/wp-content/uploads/2022/12/beyran-768x432.jpg.webp",
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
          height: 40,
          fontSize: 15,
          fontWeight: "normal",
          backgroundColor: "#dcdcdc",
          color: "black",
        }}
      >
        Beyran Beyran, hemen hemen paça çorbasının içerisine piriç katılmış bir
        Antep yemeğidir
      </Text>
      <Image
        source={{
          uri: "https://antepyoreselurunler.com/wp-content/uploads/2022/12/nohut-durumu.jpg.webp",
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
          height: 60,
          fontSize: 15,
          fontWeight: "normal",
          backgroundColor: "#dcdcdc",
          color: "black",
        }}
      >
        Nohut Dürümü Nohut dürümü, Gaziantep’in sokak lezzetlerinden birisi
        olmakla beraber dürüm kültürünün en meşhur öğesidir.
      </Text>
      <Image
        source={{
          uri: "https://antepyoreselurunler.com/wp-content/uploads/2022/04/antep-ezmesi-768x432.jpg.webp",
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
          height: 60,
          fontSize: 15,
          fontWeight: "normal",
          backgroundColor: "#dcdcdc",
          color: "black",
        }}
      >
        Antep Ezmesi Antep ezmesi, acılı ve içerisine buz konularak soğuk
        tüketilen bir meze çeşididir. Acılı Antep ezmesi tarifi için tıklayınız…
      </Text>
      <Image
        source={{
          uri: "https://antepyoreselurunler.com/wp-content/uploads/2020/05/antep-baklavas%C4%B1-f%C4%B1st%C4%B1kl%C4%B1-500x334.jpg.webp",
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
          height: 60,
          fontSize: 15,
          fontWeight: "normal",
          backgroundColor: "#dcdcdc",
          color: "black",
        }}
      >
        Baklava Baklava, Antep fıstığı ile tepsilerde yapılan ve büyük bir
        ustalık gerektiren bir tatlıdır. Kare ve üçken başta olmak üzere; birçok
        çeşidi bulunmaktadır.
      </Text>
      <Image
        source={{
          uri: "https://antepyoreselurunler.com/wp-content/uploads/2022/12/katmer.jpg.webp",
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
          height: 120,
          fontSize: 15,
          fontWeight: "normal",
          backgroundColor: "#dcdcdc",
          color: "black",
        }}
      >
        Katmer, Gaziantep’in kahvaltı kültüründe yer alan ince hamurdan açılmış
        bol fıstıklı ve sade yağlı enfes bir yemek-tatlı çeşididir. Gaziantep
        yöresel sulu ve tava yemeklerini genel olarak listelemeye çalıştık,
        okuduğunuz için teşekkür ederiz. Gaziantep gezilecek yerler yazımıza da
        göz atmak için tıklayabilirsiniz.
      </Text>
      
    </ScrollView>
  );
}
export default Yemek;
