# Proje : Film Nesnesi

Bu projede, bir **`movie`** nesnesi oluşturarak object literal kullanımını ve metot oluşturmayı pekiştireceğiz. `movie` nesnesi bir filmin başlıca özelliklerini içerecek ve bir bilgi görüntüleme fonksiyonuna sahip olacak.

## Özellikler

1. **title** (string): Filmin adı.
2. **director** (string): Filmin yönetmeni.
3. **year** (number): Filmin çıkış yılı.
4. **genres** (array): Filmin türleri. En az 2 tür içermelidir.
5. **isAvailableOnStreaming** (boolean): Filmin bir dijital platformda mevcut olup olmadığını belirtir.
6. **displayMovieInfo** (function): Film hakkında bilgileri yazdıran bir fonksiyon, çıktısı şu formatta olmalıdır:  
   `"Film: [title] - Yönetmen: [director] - Yıl: [year]"`

## Amaç

- `movie` nesnesi ile film bilgilerini tanımlamak ve object literal yapısını kullanarak veri modelleme pratiği yapmak.
- `displayMovieInfo` fonksiyonunu kullanarak nesne içinde metot oluşturmayı öğrenmek.
- `title`, `year`, `genres` dizisindeki ilk türe ve `isAvailableOnStreaming` bilgisine erişerek nesne içindeki verilere ulaşmak.

## Kullanman Gereken Film Bilgileri

- **title**: "Inception"
- **director**: "Christopher Nolan"
- **year**: 2010
- **genres**: ["Bilim Kurgu", "Aksiyon"]
- **isAvailableOnStreaming**: true

## Kullanım

Ödev gereği, yukarıdaki bilgileri kullanarak bir `movie` nesnesi oluşturmalısın. **displayMovieInfo** fonksiyonunu çağırarak filmi tanıtan bir mesaj oluştur ve ardından `title`, `year`, `genres` dizisinin ilk türünü ve `isAvailableOnStreaming` bilgisini konsola yazdır.
"""

