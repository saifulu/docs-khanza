---
id: 01-registrasi
title: Registrasi
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Registrasi

<Tabs>
  <TabItem value="tutorial" label="Tutorial" default>

    Registrasi adalah proses pencatatan atau pendaftaran pasien yang datang ke fasilitas kesehatan, baik untuk rawat jalan maupun rawat inap, yang mencakup pengisian data seperti nomor registrasi, tanggal dan waktu kedatangan, unit atau dokter yang akan dituju, serta informasi penting lainnya untuk memastikan pelayanan yang tepat.

    ![alt text](<registrasi 01.jpg>)

    ### Keterangan : 
    1. **Registrasi dan UGD/IGD**: 
       - Menu ini digunakan untuk membuka halaman registrasi pasien. Klik menu **“Registrasi”** untuk mendaftarkan pasien baru rawat jalan atau menu **“IGD/UGD”** untuk registrasi pasien yang memerlukan penanganan darurat.

    2. **Klik “Baru”**: 
       - Klik tombol **“Baru”** untuk menampilkan form registrasi dan mengupdate no. Rawat.

    3. **Isi Form Registrasi**:
       - **No. Reg**: Nomor registrasi unik pasien yang digunakan untuk mengidentifikasi setiap kunjungan ke fasilitas kesehatan.
       - **No. Rawat**: Nomor rawat pasien, dihasilkan oleh sistem untuk melacak kunjungan dan perawatan pasien.
       - **Tgl. Reg**: Tanggal registrasi pasien yang mencatat kapan pasien didaftarkan untuk kunjungan.
       - **Jam**: Waktu spesifik saat pasien mendaftar, diisi dalam format 24 jam (jam, menit, detik).
       - **Dr Dituju**: Nama dokter yang akan menangani atau memeriksa pasien selama kunjungan.
       - **Unit**: Departemen atau unit medis yang akan dituju, seperti poliklinik atau unit gawat darurat.
       - **No. Rekam Medik**: Nomor rekam medis pasien yang berisi riwayat kesehatan dan data klinis.
         - *Bisa masukan no.RM ke form dan tekan enter untuk mengambil data RM yang sudah ada.*
         - *Klik logo Klip untuk mengambil data RM atau menginput data RM baru.*
       - **Penanggung Jawab**: *(terisi otomatis dari data pasien)* Nama orang yang bertanggung jawab atas pasien, seperti anggota keluarga.
       - **Hubungan**: *(terisi otomatis dari data pasien)* Hubungan penanggung jawab dengan pasien, seperti ayah, ibu, atau kerabat.
       - **Alamat P.J.**: *(terisi otomatis dari data pasien)* Alamat lengkap penanggung jawab pasien untuk keperluan administrasi atau penagihan.
       - **Status**: Status pasien (misalnya, lama atau baru).
       - **Jenis Bayar**: *(terisi otomatis dari data pasien, bisa disesuaikan jika pasien merubah jenis bayar)* Metode pembayaran, seperti BPJS, asuransi kesehatan, atau Umum.
       - **No. Ka**: *(terisi otomatis dari data pasien)* Nomor kartu asuransi atau BPJS yang digunakan untuk keperluan klaim.
       - **Asal Rujukan**: Fasilitas kesehatan lain yang merujuk pasien, jika ada.

    4. **Klik “Simpan”**: 
       - Klik tombol **“Simpan”** untuk menyimpan data yang di atas sesuai dengan form.

    5. **Data Pasien**: 
       - Data pasien yang berkunjung akan tampil dan tersimpan di sini.

    6. **Filter atau Pensortiran Data**:
       - **Dokter**: Kolom ini digunakan untuk memfilter data pasien berdasarkan nama dokter yang menangani. Anda bisa mengetik nama dokter secara langsung atau menggunakan tombol **Klip** di sebelah kanan untuk memilih dokter dari daftar yang tersedia. Fitur ini mempermudah pencarian data pasien berdasarkan dokter tertentu.
       - **Unit**: Kolom ini digunakan untuk memfilter data berdasarkan unit medis atau departemen, seperti poliklinik, rawat inap, atau laboratorium. Anda bisa mengetik nama unit atau klik tombol **Klip** di sebelah kanan untuk memilih dari daftar unit yang tersedia. Dengan memilih unit, Anda bisa melihat data pasien yang ditangani di departemen tersebut.
       - **Periode**: Filter ini digunakan untuk menampilkan data pasien dalam rentang waktu tertentu. Anda dapat memilih tanggal awal dan tanggal akhir menggunakan ikon kalender. Fitur ini berguna untuk mencari data pasien yang terdaftar atau diperiksa dalam periode waktu tertentu.
       - **Key Word**: Kolom ini memungkinkan Anda untuk memasukkan kata kunci spesifik, seperti nama pasien, nomor rekam medis, atau informasi lain yang relevan. Fitur ini digunakan untuk memfilter data secara cepat berdasarkan kata kunci yang Anda masukkan. Klik tombol **√ (checkmark)** di sebelah kanan untuk menjalankan filter dan menampilkan data yang sesuai dengan kriteria pencarian.

  </TabItem>

  <TabItem value="structure" label="Structure">

### reg_periksa Table Schema

| Column Name     | Type         | Length | Foreign Key Name     | References Table  | References Field |
|-----------------|--------------|--------|----------------------|-------------------|------------------|
| no_reg          | varchar(8)   | 8      |                      |                   |                  |
| no_rawat        | varchar(17)  | 17     |                      |                   |                  |
| tgl_registrasi  | date         | None   |                      |                   |                  |
| jam_reg         | time         | None   |                      |                   |                  |
| kd_dokter       | varchar(20)  | 20     | reg_periksa_ibfk_4    | dokter            | kd_dokter        |
| no_rkm_medis    | varchar(15)  | None   | reg_periksa_ibfk_7    | pasien            | no_rkm_medis     |
| kd_poli         | char(5)      | None   | reg_periksa_ibfk_3    | poliklinik        | kd_poli          |
| p_jawab         | varchar(100) | None   |                      |                   |                  |
| almt_pj         | varchar(200) | None   |                      |                   |                  |
| hubunganpj      | varchar(20)  | None   |                      |                   |                  |
| biaya_reg       | double       | None   |                      |                   |                  |
| stts            | enum         | None   |                      |                   |                  |
| stts_daftar     | enum         | None   |                      |                   |                  |
| status_lanjut   | enum         | None   |                      |                   |                  |
| kd_pj           | char(3)      | None   | reg_periksa_ibfk_6    | penjab            | kd_pj            |
| umurdaftar      | int(11)      | None   |                      |                   |                  |
| sttsumur        | enum         | None   |                      |                   |                  |
| status_bayar    | enum         | None   |                      |                   |                  |
| status_poli     | enum         | None   |                      |                   |                  |


  </TabItem>
</Tabs>

