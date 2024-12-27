import { BorderTrail } from './BorderTail'

export const Chip = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative grid place-items-center rounded-full bg-dark/60 px-5 py-1">
      <BorderTrail
        style={{
          boxShadow:
            '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
        }}
        size={100}
      />
      {children}
    </div>
  )
}
