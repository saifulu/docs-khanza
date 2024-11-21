---
id: 01-instalasi-server
title: Instalasi Server
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

cara instalasi server
<Tabs>
<TabItem value="windows" label="Windows" default>
# Panduan Instalasi Khanza di Windows

Ikuti langkah-langkah di bawah ini untuk menginstal Khanza di sistem operasi Windows.

## 1. Instalasi OS Windows
Pastikan sistem operasi Windows telah terinstal dengan baik. Jika belum, instal Windows terlebih dahulu sesuai petunjuk instalasi Windows.

## 2. Download Beberapa Keperluan

### a. Buka Link Download
- Kunjungi situs [Yaski.or.id](https://www.yaski.or.id/) untuk mendapatkan file yang diperlukan.
- Klik link download
![alt text](image-1.png)

### b. Masuk ke Google Drive
- Setelah membuka situs, Anda akan diarahkan ke Google Drive untuk mengunduh file yang dibutuhkan.
![alt text](image-2.png)

### c. Download `KhanzaHMSWindows`
- Masuk ke folder `Software SIMRSKhanza\KhanzaHMSWindows` yang tersedia di Google Drive.
- Klik kanan pada file `KhanzaHMSWindows` dan pilih `Download`.
![alt text](image-3.png)

### d. Unzip File
- Setelah file selesai diunduh, ekstrak file ZIP menggunakan aplikasi pengarsipan seperti **WinRAR** atau **7-Zip**.

## 3. Install XAMPP

- Buka folder hasil ekstrak file `khanzaHMSWindows` dan temukan installer **XAMPP**.
![alt text](image-4.png)
- Jalankan installer XAMPP dan ikuti langkah-langkah instalasi.
---
## 4. Buat dan Import Database `sik`

#### Pastikan XAMPP Berjalan
1. Buka **XAMPP Control Panel**.
2. Jalankan **Apache** dan **MySQL** dengan mengklik tombol **Start**.

#### Buka Command Prompt
1. Tekan **`Windows + R`**, lalu ketik **`cmd`** dan tekan **Enter**.
2. Arahkan direktori ke folder instalasi MySQL pada XAMPP dengan perintah berikut:
```cmd
cd C:\xampp\mysql\bin
```
#### Masuk ke MySQL Command Line
1. Masuk ke MySQL dengan mengetikkan perintah berikut:
```cmd
mysql -u root -p
```
- Jika Anda tidak menggunakan password untuk MySQL, tekan **Enter** setelah mengetik perintah.
- Jika menggunakan password, masukkan password Anda.

#### Buat Database `sik`
Setelah berhasil masuk ke MySQL, buat database baru bernama **`sik`** dengan perintah:
```sql
CREATE DATABASE sik;
```
#### Keluar dari MySQL
Ketik perintah berikut untuk keluar dari MySQL Command Line:
```cmd
exit
```
#### Import File `sik.sql`
1. Pastikan file **`sik.sql`** berada di folder **`KhanzaHMSWindows`**.
2. Ketik perintah berikut untuk mengimpor file ke database **`sik`**:
```cmd
mysql -u root -p sik < "C:\Path\To\KhanzaHMSWindows\sik.sql"
```
Gantilah **`C:\Path\To\KhanzaHMSWindows`** dengan lokasi sebenarnya dari folder **`KhanzaHMSWindows`** di komputer Anda. Contoh:
```cmd
mysql -u root -p sik < "C:\xampp\htdocs\KhanzaHMSWindows\sik.sql"
```

- Jika Anda tidak menggunakan password untuk MySQL, gunakan perintah ini:
    ```cmd
    mysql -u root sik < "C:\Path\To\KhanzaHMSWindows\sik.sql"
    ```
#### Verifikasi Database
1. Kembali ke MySQL dengan perintah:
```cmd
mysql -u root -p
```
2. Pilih database **`sik`**:
```sql
USE sik;
```
3. Tampilkan tabel-tabel yang ada untuk memastikan impor berhasil:
```sql
SHOW TABLES;
```
:::note
**Catatan** 
- Pastikan lokasi file **`sik.sql`** sesuai dengan perintah yang digunakan.
- Jika ada error, periksa kembali nama file dan path folder tempat file berada.
:::

            

## 5. Buat Folder `webapps` di `htdocs`

- Navigasi ke direktori instalasi XAMPP, biasanya terletak di `C:\xampp\htdocs`.
- Buat folder baru dengan nama **webapps**.
- Pindahkan seluruh file dan folder dari hasil ekstraksi file `khanzaHMSWindows` ke dalam folder **webapps** yang baru dibuat.

## 6. Ubah Privileges (Agar Data Bisa Diakses Klien)

- **Masuk ke MySQL** dengan perintah yang sama seperti sebelumnya:
   ```bash
   mysql -u root -p
   ```

- **Berikan akses kepada klien** dengan perintah berikut. Gantilah `user_name` dengan nama pengguna klien yang ingin diberi akses dan `client_ip_address` dengan alamat IP dari komputer klien:
   ```sql
   GRANT ALL PRIVILEGES ON sik.* TO 'user_name'@'client_ip_address' IDENTIFIED BY 'user_password';
   ```
   Misalnya, jika nama pengguna klien adalah `clientuser` dan alamat IP klien adalah `192.168.1.10`, serta password klien adalah `password123`, maka perintahnya akan menjadi:
   ```sql
   GRANT ALL PRIVILEGES ON sik.* TO 'clientuser'@'192.168.1.10' IDENTIFIED BY 'password123';
   ```

- **Terapkan perubahan** dengan perintah:
   ```sql
   FLUSH PRIVILEGES;
   ```

- **Cek Privileges Klien**

    Untuk memeriksa apakah klien sudah mendapatkan akses, Anda bisa menggunakan perintah berikut:
    ```sql
    SHOW GRANTS FOR 'clientuser'@'192.168.1.10';
    ``` 

## Selesai

Jika ada masalah, pastikan Apache dan MySQL sudah berjalan dengan baik di XAMPP dan pastikan database sudah terimpor dengan benar.

</TabItem>
<TabItem value="linux" label="Linux">
isi cara instalasi di linux untuk server
</TabItem>
<TabItem value="macos" label="MacOS">
isi cara instalasi di macos untuk server
</TabItem>
</Tabs>

