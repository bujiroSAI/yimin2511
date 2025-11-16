'use client'

import { useEffect, useRef, useState } from 'react'

interface Fish {
  x: number
  y: number
  targetX: number
  targetY: number
  vx: number
  vy: number
  size: number
  color: string
  delay: number
}

export default function CursorFish() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const fishRef = useRef<Fish[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // キャンバスサイズの設定
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // 魚の初期化
    const initFish = () => {
      fishRef.current = []
      const fishCount = 5 // 魚の数
      
      const colors = [
        'rgba(100, 180, 255, 0.85)', // 明るいブルー
        'rgba(150, 220, 255, 0.85)', // 水色
        'rgba(80, 160, 240, 0.85)', // 濃いブルー
        'rgba(120, 200, 250, 0.85)', // スカイブルー
        'rgba(90, 170, 230, 0.85)', // ミディアムブルー
      ]
      
      for (let i = 0; i < fishCount; i++) {
        fishRef.current.push({
          x: canvas.width / 2 + (Math.random() - 0.5) * 200,
          y: canvas.height / 2 + (Math.random() - 0.5) * 200,
          targetX: canvas.width / 2,
          targetY: canvas.height / 2,
          vx: 0,
          vy: 0,
          size: 20 + Math.random() * 15,
          color: colors[i % colors.length],
          delay: i * 0.2, // 魚ごとに遅延を設定
        })
      }
    }

    initFish()

    // マウス位置の追跡
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    // 可愛い魚を描画（シンプルで明確な魚の形）
    const drawFish = (fish: Fish) => {
      ctx.save()
      
      // 魚の向きを計算
      const dx = fish.targetX - fish.x
      const dy = fish.targetY - fish.y
      const angle = Math.atan2(dy, dx)
      
      ctx.translate(fish.x, fish.y)
      ctx.rotate(angle)
      
      // 魚の体（シンプルな楕円）
      ctx.fillStyle = fish.color
      ctx.beginPath()
      ctx.ellipse(0, 0, fish.size * 0.6, fish.size * 0.4, 0, 0, Math.PI * 2)
      ctx.fill()
      
      // 尾びれ（シンプルで明確な三角形）
      ctx.beginPath()
      ctx.moveTo(-fish.size * 0.6, 0)
      ctx.lineTo(-fish.size * 1.2, -fish.size * 0.5)
      ctx.lineTo(-fish.size * 1.2, fish.size * 0.5)
      ctx.closePath()
      ctx.fill()
      
      // 背びれ（小さな三角形）
      ctx.beginPath()
      ctx.moveTo(fish.size * 0.2, -fish.size * 0.4)
      ctx.lineTo(fish.size * 0.0, -fish.size * 0.7)
      ctx.lineTo(-fish.size * 0.1, -fish.size * 0.4)
      ctx.closePath()
      ctx.fill()
      
      // 腹びれ（小さな三角形）
      ctx.beginPath()
      ctx.moveTo(fish.size * 0.2, fish.size * 0.4)
      ctx.lineTo(fish.size * 0.0, fish.size * 0.7)
      ctx.lineTo(-fish.size * 0.1, fish.size * 0.4)
      ctx.closePath()
      ctx.fill()
      
      // 胸びれ（小さな三角形）
      ctx.beginPath()
      ctx.moveTo(fish.size * 0.5, -fish.size * 0.2)
      ctx.lineTo(fish.size * 0.7, -fish.size * 0.3)
      ctx.lineTo(fish.size * 0.6, -fish.size * 0.1)
      ctx.closePath()
      ctx.fill()
      
      ctx.beginPath()
      ctx.moveTo(fish.size * 0.5, fish.size * 0.2)
      ctx.lineTo(fish.size * 0.7, fish.size * 0.3)
      ctx.lineTo(fish.size * 0.6, fish.size * 0.1)
      ctx.closePath()
      ctx.fill()
      
      // 魚の目（大きく丸く）
      ctx.fillStyle = 'rgba(255, 255, 255, 1)'
      ctx.beginPath()
      ctx.arc(fish.size * 0.25, -fish.size * 0.1, fish.size * 0.2, 0, Math.PI * 2)
      ctx.fill()
      
      // 目の黒目
      ctx.fillStyle = 'rgba(0, 0, 0, 1)'
      ctx.beginPath()
      ctx.arc(fish.size * 0.25, -fish.size * 0.1, fish.size * 0.12, 0, Math.PI * 2)
      ctx.fill()
      
      // 目のハイライト
      ctx.fillStyle = 'rgba(255, 255, 255, 1)'
      ctx.beginPath()
      ctx.arc(fish.size * 0.28, -fish.size * 0.13, fish.size * 0.05, 0, Math.PI * 2)
      ctx.fill()
      
      ctx.restore()
    }

    // アニメーションループ
    const animate = () => {
      if (!isVisible) {
        animationFrameRef.current = requestAnimationFrame(animate)
        return
      }

      // キャンバスをクリア
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // 魚を更新
      fishRef.current.forEach((fish, index) => {
        // ターゲット位置（マウス位置 + オフセット）
        const offsetX = Math.cos(index * 0.5) * 50
        const offsetY = Math.sin(index * 0.5) * 50
        fish.targetX = mouseRef.current.x + offsetX
        fish.targetY = mouseRef.current.y + offsetY
        
        // スムーズに追従（イージング）
        const easing = 0.08 + fish.delay * 0.02
        fish.vx += (fish.targetX - fish.x) * easing
        fish.vy += (fish.targetY - fish.y) * easing
        
        // 速度を制限
        const maxSpeed = 3 + fish.size * 0.1
        const speed = Math.sqrt(fish.vx * fish.vx + fish.vy * fish.vy)
        if (speed > maxSpeed) {
          fish.vx = (fish.vx / speed) * maxSpeed
          fish.vy = (fish.vy / speed) * maxSpeed
        }
        
        // 摩擦
        fish.vx *= 0.95
        fish.vy *= 0.95
        
        // 位置を更新
        fish.x += fish.vx
        fish.y += fish.vy
        
        // 魚を描画
        drawFish(fish)
      })
      
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isVisible])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-50"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
      }}
    />
  )
}

