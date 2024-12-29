import styles from './Loading.module.css'

import Section from '@/components/atoms/Section'

export default function LoadingPage() {
  return (
    <div className="mt-18 relative -top-16 h-screen sm:mt-0">
      <Section className="grid min-h-screen place-items-center">
        <div
          style={{
            display: 'grid',
            placeContent: 'center',
            backgroundColor: 'var(--c-darkgray-800)',
            position: 'absolute',
            zIndex: '5000',
            inset: 0,
          }}
        >
          <div className={styles.loader}>
            <div className={styles.box1}></div>
            <div className={styles.box2}></div>
            <div className={styles.box3}></div>
          </div>
        </div>
      </Section>
    </div>
  )
}
