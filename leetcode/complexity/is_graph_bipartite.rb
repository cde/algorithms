def is_bipartite(graph)
  color = {}

  graph.length.times do |i|
    if color[i].nil? && graph[i]
      color[i] = 0

    end
  end
end

def find_conflict(i, color)

end