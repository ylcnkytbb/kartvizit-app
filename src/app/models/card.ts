export interface Card {
    name?: string;
    title: string;
    phone: string;
    email?: string;
    adress?: string;
}
//api'den title ve phone'un required olduğunu görüyorum o yüzden zorunlu olmayanların yanına ? nullable object koyalım