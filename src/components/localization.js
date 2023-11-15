
class localization {

    languages(lang) {

        var en = {
            home: 'Home',
            aboutUs: 'About Us',
            ourProducts: 'Our Products',
            contact: "Contact Us",
            contacUs: "Contact Us",
            revealingTextFirst: "For our unique products with ",
            revealingTextSecond: "Unlimited design possibilities...",
            messageSuccess: "Your message has been sent successfuly.",
            thanksForMessage: "Thanks for contacting us.",
            messageFail: "There has been an error sending message.",
            tryAgainLater: "Please try again later.",
            nameSurname: "Name Surname",
            nameSurnamePlaceHolder: "Name Surname*",
            emailAddress: "E-Mail Address",
            emailAddressPlaceHolder: "address@email.com*",
            address: "Address",
            message: "Message",
            messagePlaceHolder: "Message*",
            fillArea: "Please fill that area.",
            send: "Send",
            aboutUsTextFirst: "Welcome to Tessera Design, your number one source for all things for design. We're dedicated to giving you the very best of handmade products, with a focus on quality and aesthetic.",
            aboutUsTextSecond: "  Founded in 2011 by Şule, Erdal and Furkan Aydemir, Tessera Design has come a long way from its beginnings in Gaziantep, Turkey. When we first started out, our passion for good looking handmade products drove us to do tons of research and designs so that Tessera Design can offer you your dream products with any design you wish. We now serve customers all over the world, and are thrilled that we're able to turn our passion into our own job.",
            aboutUsTextThird: " We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.",
            aboutUsTextFourth: "Sincerely,",
            aboutUsTextFifth: "Tessera Design",
        }
        var tr = {
            home: 'Ana Sayfa',
            aboutUs: 'Hakkımızda',
            ourProducts: 'Ürünlerimiz',
            contact: "İletişim",
            contacUs: "Bize Ulaşın",
            revealingTextFirst: "Sınırsız tasarım imkanlarıyla",
            revealingTextSecond: "Size özgü ürünlerimiz için...",
            messageSucces: "Mesajınız başarı ile gönderilmiştir.",
            thanksForMessage: "Bizimle iletişime geçtiğiniz için teşekkürler.",
            messageFail: "Mesajınız gönderilirken bir hata oluştu.",
            tryAgainLater: "Lütfen daha sonra tekrar deneyiniz.",
            nameSurname: "İsim Soyisim",
            nameSurnamePlaceHolder: "İsim Soyisim*",
            emailAddress: "E-Posta Adresi",
            emailAddressPlaceHolder: "adres@email.com*",
            address: "Adres",
            message: "Mesaj",
            messagePlaceHolder: "Mesaj*",
            fillArea: "Lütfen bu alanı doldurunuz.",
            send: "Gönder",
            aboutUsTextFirst: "Tasarımla ilgili her konuda bir numaralı kaynağınız Tessera Tasarım'a hoş geldiniz. Kendimizi kalite ve estetiğe odaklanarak size en iyi el yapımı ürünleri sunmaya adadık.",
            aboutUsTextSecond: "2011 yılında Şule, Erdal ve Furkan Aydemir tarafından kurulan Tessera Tasarım, Gaziantep'teki kuruluşundan bu yana çok yol kat etti. İlk başladığımızda, güzel görünümlü el yapımı ürünlere olan tutkumuz, Tessera Tasarım'ın hayalinizdeki ürünleri dilediğiniz tasarımla size sunabilmesi için bizi tonlarca araştırma ve tasarım yapmaya yöneltti.Artık dünyanın her yerindeki müşterilere hizmet veriyoruz ve tutkumuzu kendi işimize dönüştürebildiğimiz için çok heyecanlıyız.",
            aboutUsTextThird: "Ürünlerimizi size sunmaktan keyif aldığımız kadar sizin de beğeneceğinizi umuyoruz.Herhangi bir sorunuz veya yorumunuz varsa, lütfen bizimle iletişime geçmekten çekinmeyin.",
            aboutUsTextFourth: "Sevgilerimizle,",
            aboutUsTextFifth: "Tessera Tasarım"
        }

        if (lang == "TR") {
            return tr;
        }
        else if (lang == "EN") {
            return en;
        }
    }

}
const localString = new localization();
export default localString;