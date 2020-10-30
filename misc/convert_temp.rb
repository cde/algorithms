def convert_temp(temp, input_scale: 'celsius', output_scale: 'celsius')
  if input_scale.downcase == output_scale.downcase
    return temp
  end
  case input_scale.downcase
  when 'fahrenheit'
    return output_scale.downcase == 'kelvin' ?
               ((temp - 32) / 1.8) + 273.15 : (temp - 32) / 1.8
  when 'celsius'
    return output_scale.downcase == 'kelvin' ?
               temp + 273.15 : (temp * 1.8) + 32
  when 'kelvin'
    return output_scale.downcase == 'celsius' ?
               temp - 273.15 : (temp - 273.15) * 1.8
  end
end


def convert_temp(temp, input_scale: 'celsius', output_scale: 'celsius')
  return temp if input_scale.downcase == output_scale.downcase
  case input_scale.downcase
  when 'celsius'
    if output_scale == 'fahrenheit'
      (temp.to_i * 9/5) + 32
    elsif output_scale == 'kelvin'
      temp.to_i + 273.15
    end
  when 'fahrenheit'
    base = (temp - 32) * 5/9
    if output_scale == 'celsius'
      base
    elsif output_scale == 'kelvin'
      base + 273.15
    end

  when 'kevin'
    if output_scale == 'fahrenheit'
      (temp - 273.15) * 9/5 + 32
    else
      (temp - 32) * 5/9 + 273.15
    end
  end
end

