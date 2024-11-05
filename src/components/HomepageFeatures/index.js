import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Mudah Digunakan',
    Svg: require('@site/static/img/undraw_medcine.svg').default,
    description: (
      <>
        SIMKES Khanza dirancang untuk mempermudah pengelolaan informasi kesehatan. 
        Instalasi dan penggunaan yang mudah memungkinkan sistem ini segera berjalan dengan lancar.
      </>
    ),
  },
  {
    title: 'Keamanan Data Pasien',
    Svg: require('@site/static/img/undraw_safe_re_kiil.svg').default,
    description: (
      <>
        Dengan menyimpan data pasien dalam <code>DATABASE</code> lokal Fasilitas Kesehatan yang terstruktur, 
        aman, dan terenkripsi secara efisien, SIMKES Khanza meminimalkan risiko pelanggaran data.
      </>
    ),
  },
  {
    title: 'OpenSource Software',
    Svg: require('@site/static/img/undraw_pair_programming_re_or4x.svg').default,
    description: (
      <>
        Dengan menggunakan teknologi terbuka *(Open Source)*, kita bersama-sama membangun 
        SIMKES Khanza untuk masa depan kesehatan yang lebih baik. Setiap kontribusi sangat berarti!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
