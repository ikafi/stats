package fi.gosu.ika.stats.repository;

import fi.gosu.ika.stats.domain.Battle;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Battle Repository
 *
 * @author Ville Nupponen
 * @since 0.1.
 */
public interface BattleRepository extends JpaRepository<Battle, Long> {

    Battle findByCompatId(Long compatId);
}
